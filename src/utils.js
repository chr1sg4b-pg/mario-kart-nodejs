/**
 * Retorna um número aleatório entre o valor mínimo e máximo.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Simula um dado de 6 lados.
 * @returns {number}
 */
export function rollDice() {
  return getRandomNumber(1, 6);
}

/**
 * Escolhe um elemento aleatório de um array.
 * @param {Array} array
 * @returns {*}
 */
export function getRandomItem(array) {
  const index = getRandomNumber(0, array.length - 1);
  return array[index];
}

/**
 * Aguarda alguns milissegundos.
 * Muito útil para deixar a corrida mais dinâmica.
 * @param {number} ms
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}