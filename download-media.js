const fs = require("node:fs/promises");
const path = require("node:path");
const { greetingGifs, foodGifs } = require("./src/media");

const outputDir = path.join(__dirname, "downloaded-media");
const groups = { saludo: greetingGifs, ...foodGifs };

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  let failed = false;

  for (const [category, urls] of Object.entries(groups)) {
    for (const [index, url] of urls.entries()) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const extension = path.extname(new URL(url).pathname) || ".gif";
        const filename = `${category}-${index + 1}${extension}`;
        await fs.writeFile(
          path.join(outputDir, filename),
          Buffer.from(await response.arrayBuffer()),
        );
        console.log(`Guardado: downloaded-media/${filename}`);
      } catch (error) {
        failed = true;
        console.error(`No se pudo descargar ${url}: ${error.message}`);
      }
    }
  }

  if (failed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
