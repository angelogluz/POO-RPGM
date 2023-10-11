import prompt from 'prompt-sync';
import { Personagem } from "./Personagem";

const teclado = prompt();

//TODO: https://abre.ai/gYcK

let protagonista: Personagem;
let continua = true;

console.log("Antes de qualquer coisa precisamos criar o seu personagem.");
teclado("Tecle <ENTER> para continuar")

const nome = teclado("Digite o nome do seu personagem: ")
const raca = teclado("Digite a raça do seu personagem: ")
const classe = teclado("Digite a classe do seu personagem: ")
const armaTipo = teclado("Escolha sua arma: ")

const armaNome = teclado("Digite o nome da sua arma: ")

protagonista = new Personagem(nome, raca, classe, armaTipo, armaNome);

do {

  console.log("=========== MENU =============");
  console.log("| 1. Verificar status       |");
  console.log("| 2. Treinar ataque         |");
  console.log("| 3. Treinar defesa         |");
  console.log("| 4. Entrar em batalha      |");
  console.log("==============================");

  const escolha: number = +teclado("Escolha uma opção: ")



  switch (escolha) {
    case 1:
      console.table(protagonista)
      break;

    case 2:
      continua = protagonista.treinarAtaque()
      if (!continua) {
        console.log('Personagem morreu por falta de stamina: ' + protagonista.status.stamina);

      }
      break;

    case 3:
      const tempo: number = +teclado("Qual a duração do treino em horas? ")
      continua = protagonista.treinarDefesa(tempo);
      if (!continua) {
        console.log("Game over! Treino em excesso!");

      }

    default:
      break;
  }
}
while (continua);

