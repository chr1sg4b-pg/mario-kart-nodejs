import { characters } from "./characters.js";
import { items } from "./items.js";
import { getRandomItem } from "./utils.js";

/**
 * Escolhe dois personagens aleatórios.
 */
export function choosePlayers() {
  const availableCharacters = [...characters];

  const player1 = getRandomItem(availableCharacters);
  availableCharacters.splice(availableCharacters.indexOf(player1), 1);

  const player2 = getRandomItem(availableCharacters);

  return [player1, player2];
}

/**
 * Sorteia um item aleatório.
 */
export function chooseRandomItem() {
  return getRandomItem(items);
}

/**
 * Exibe os competidores antes da corrida.
 */
export function showPlayers(player1, player2) {
  console.log("\n🏁══════════════════════════════════════🏁");
  console.log("          MARIO KART TERMINAL");
  console.log("🏁══════════════════════════════════════🏁\n");

  console.log(`${player1.emoji} ${player1.name}`);
  console.log(`⚡ Velocidade: ${player1.speed}`);
  console.log(`🛞 Manobrabilidade: ${player1.handling}`);
  console.log(`💪 Poder: ${player1.power}`);

  console.log("\n           🆚\n");

  console.log(`${player2.emoji} ${player2.name}`);
  console.log(`⚡ Velocidade: ${player2.speed}`);
  console.log(`🛞 Manobrabilidade: ${player2.handling}`);
  console.log(`💪 Poder: ${player2.power}`);

  console.log("\n🏎️ A corrida vai começar...\n");
}