# Cultural Discord bot (Argentina)

Con [discord.js](https://discord.js.org/).

Este es un proyecto que probablemente se expanda a futuro, incorporando otras naciones. La idea es tener una forma de mostrar y promover el caracter de un pueblo a través de GIFs y frases.

## Funciones

- `!ping` responde `¡Pong!`.
- Un mensaje que contiene `hola` o `buenas` en cualquier posición recibe un saludo y un GIF.
- `!decir TEXTO` envía `El usuario dijo: "TEXTO"`.
- `Mate?` elige GIF de mate y `Merienda?` escenas de Kero-chan o comida de Cardcaptor Sakura. `Desayuno?` tiene dos escenas de comida y `Almuerzo?` una escena de alguien comiendo; la lista de `Cena?` sigue vacía y esto se va a ir más por el lado de incluír comidas tradicionales.
- Las preguntas de comida deben ser el mensaje breve completo y terminar en `?`. Se toleran espacios, mayúsculas, acentos y un error de escritura conservador en las palabras largas.

> No hay límites de frecuencia.

> Los mensajes cuyo autor es un bot se ignoran. Un mensaje puede activar más de una respuesta.

## Desarrollo

`npm ci` para instalar dependencias.

`node download-media.js` descarga los archivos de `src/media.js` en `downloaded-media/` para revisarlos localmente. Hace falta el link de la imagen mismo, en vez del de la página de _tenor_.

El GIF de GifDB ronda los 9 MB y conviene revisar si se muestra correctamente.

Para iniciar el bot se necesita un token de Discord en la variable de entorno `DISCORD_TOKEN`.

El código solicita los intents `Guilds`, `GuildMessages` y `MessageContent`. `node index.js` conecta a Discord.
