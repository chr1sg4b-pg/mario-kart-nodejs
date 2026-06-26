import { rollDice } from "./utils.js";

const tracks = {
  RETA: "speed",
  CURVA: "handling",
  CONFRONTO: "power",
};

const labels = {
  speed: "Velocidade",
  handling: "Manobrabilidade",
  power: "Poder",
};

export function getRandomTrack() {
  const keys = Object.keys(tracks);
  return keys[Math.floor(Math.random() * keys.length)];
}

function calculateScore(player, dice, track) {
  return dice + player[tracks[track]];
}

export function playRound(player1, player2, round = null) {
  const track = getRandomTrack();

  console.log("\n════════════════════════════════════");

  if (round !== null) {
    console.log(`🏁 RODADA ${round}`);
    console.log("════════════════════════════════════");
  }

  console.log(`🛣️ Tipo da pista: ${track}\n`);

  const dice1 = rollDice();
  const dice2 = rollDice();

  const total1 = calculateScore(player1, dice1, track);
  const total2 = calculateScore(player2, dice2, track);

  console.log(`${player1.emoji} ${player1.name}`);
  console.log(`🎲 Dado: ${dice1}`);
  console.log(`📈 ${labels[tracks[track]]}: ${player1[tracks[track]]}`);
  console.log(`✅ Total: ${total1}\n`);

  console.log(`${player2.emoji} ${player2.name}`);
  console.log(`🎲 Dado: ${dice2}`);
  console.log(`📈 ${labels[tracks[track]]}: ${player2[tracks[track]]}`);
  console.log(`✅ Total: ${total2}\n`);

  if (track === "CONFRONTO") {
    console.log("⚔️ CONFRONTO!\n");

    if (total1 > total2) {
      console.log(`💥 ${player1.name} acertou ${player2.name}!`);

      if (player2.points > 0) {
        player2.points--;
        console.log(`❌ ${player2.name} perdeu 1 ponto.`);
      } else {
        console.log(`${player2.name} não tinha pontos para perder.`);
      }

    } else if (total2 > total1) {
      console.log(`💥 ${player2.name} acertou ${player1.name}!`);

      if (player1.points > 0) {
        player1.points--;
        console.log(`❌ ${player1.name} perdeu 1 ponto.`);
      } else {
        console.log(`${player1.name} não tinha pontos para perder.`);
      }

    } else {
      console.log("🤝 Empate! Nenhum ataque acertou.");
    }

  } else {

    if (total1 > total2) {
      player1.points++;
      console.log(`🏆 ${player1.name} venceu a rodada!`);

    } else if (total2 > total1) {
      player2.points++;
      console.log(`🏆 ${player2.name} venceu a rodada!`);

    } else {
      console.log("🤝 Empate! Nenhum ponto foi ganho.");
    }
  }

  console.log("\n📊 PLACAR");
  console.log(`${player1.emoji} ${player1.name}: ${player1.points} ponto(s)`);
  console.log(`${player2.emoji} ${player2.name}: ${player2.points} ponto(s)`);
}