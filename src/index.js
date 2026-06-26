import { choosePlayers, showPlayers } from "./game.js";
import { playRound } from "./race.js";

const [player1, player2] = choosePlayers();

// Apresentação dos jogadores
showPlayers(player1, player2);

// Corrida
const TOTAL_ROUNDS = 5;

for (let round = 1; round <= TOTAL_ROUNDS; round++) {
  playRound(player1, player2, round);
}

// Resultado Final
console.log("\n");
console.log("════════════════════════════════════");
console.log("🏆 RESULTADO FINAL");
console.log("════════════════════════════════════\n");

console.log(`${player1.emoji} ${player1.name}: ${player1.points} ponto(s)`);
console.log(`${player2.emoji} ${player2.name}: ${player2.points} ponto(s)`);

console.log("");

if (player1.points > player2.points) {
  console.log(`🥇 ${player1.name} é o grande campeão! 🎉`);
} else if (player2.points > player1.points) {
  console.log(`🥇 ${player2.name} é o grande campeão! 🎉`);
} else {
  console.log("🤝 A corrida terminou empatada!");
}

console.log("\n🏁 Obrigado por jogar Mario Kart Terminal!");