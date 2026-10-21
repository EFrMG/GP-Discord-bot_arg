function isPing(text) {
  return text === "!ping";
}

function isGreeting(text) {
  return text.includes("hola") || text.includes("buenas");
}

function isDecir(text) {
  return text.startsWith("!decir ");
}

const foodQuestions = ["mate", "desayuno", "almuerzo", "merienda", "cena"];

function isOneEditOrSwap(actual, expected) {
  if (Math.abs(actual.length - expected.length) > 1) return false;

  if (actual.length === expected.length) {
    const differences = [];
    for (let index = 0; index < actual.length; index += 1) {
      if (actual[index] !== expected[index]) differences.push(index);
    }
    if (differences.length === 1) return true;
    return (
      differences.length === 2 &&
      differences[1] === differences[0] + 1 &&
      actual[differences[0]] === expected[differences[1]] &&
      actual[differences[1]] === expected[differences[0]]
    );
  }

  const shorter = actual.length < expected.length ? actual : expected;
  const longer = actual.length < expected.length ? expected : actual;
  let shortIndex = 0;
  let longIndex = 0;
  let skipped = false;
  while (shortIndex < shorter.length) {
    if (shorter[shortIndex] !== longer[longIndex]) {
      if (skipped) return false;
      skipped = true;
      longIndex += 1;
    } else {
      shortIndex += 1;
      longIndex += 1;
    }
  }
  if (
    actual.length > expected.length &&
    longIndex === shorter.length &&
    longer[longIndex] !== longer[longIndex - 1]
  )
    return false;
  return true;
}

function getFoodCategory(content) {
  const match = /^\s*¿?\s*(\p{L}[\p{L}\p{M}]*)\s*\?\s*$/u.exec(content);
  if (!match) return null;

  const word = match[1].normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  for (const category of foodQuestions) {
    if (word === category) return category;
  }

  // Allow one typo in longer words; fuzzy matching short words causes false positives.
  for (const category of foodQuestions) {
    if (category.length >= 6 && isOneEditOrSwap(word, category))
      return category;
  }
  return null;
}

export { isPing, isGreeting, isDecir, getFoodCategory };
