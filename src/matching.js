function isPing(text) {
  return text === '!ping';
}

function isGreeting(text) {
  return text.includes('hola') || text.includes('buenas');
}

function isDecir(text) {
  return text.startsWith('!decir ');
}

module.exports = { isPing, isGreeting, isDecir };
