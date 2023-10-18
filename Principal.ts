import prompt from 'prompt-sync';
import { Personagem } from "./Personagem";
import { Util } from './Util';

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
  console.log("| 5. Tirar uma soneca       |");
  console.log("| 6. Ir para o curandeiro   |");
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
      break;
    case 4:
      const inimigo: Personagem = pegarInimigo();
      while (true) {
        console.log(protagonista);
        console.table(inimigo);
        teclado("Tecle ENTER para atacar ")
        protagonista.atacar(inimigo);
        console.log(`MINHA VIDA: ${protagonista.status.vida}`);
        console.log(`VIDA DO INIMIGO: ${inimigo.status.vida}`);


      }
      break;
    case 5:
      const tempoDescanso: number = +teclado("Qual o tempo de descanso em horas? ")
      protagonista.tirarSoneca(tempoDescanso)
      break;

    default:
      break;
  }
}
while (continua);


//TODO: Faker
function pegarInimigo(): Personagem {
  const nomes: string[] = ["Edécio", "Gladimir", "Pablo", "Angelo", "Bruna"]
  const classes: string[] = ["Paladino", "Mago", "Bruxo", "Guerreiro", "Arqueiro", "Ladino"]
  const racas: string[] = ["Undead", "Orc", "Elfo", "Humano", "Demônio", "Anjo", "Anão", "Tauren", "Troll"]
  const tiposArma: string[] = ["Espada", "Adaga", "Cajado"]


  const nomeSelecionado: string = nomes[Util.randomizar(0, nomes.length - 1)]
  const classeSelecionada: string = classes[Util.randomizar(0, classes.length - 1)]
  const racaSelecionada: string = racas[Util.randomizar(0, racas.length - 1)]
  const tipoArmaSelecionada: string = tiposArma[Util.randomizar(0, tiposArma.length - 1)]
  const nomeArma: string = tipoArmaSelecionada + nomeSelecionado;

  const inimigo: Personagem = new Personagem(nomeSelecionado, racaSelecionada, classeSelecionada, tipoArmaSelecionada, nomeArma);

  inimigo.status.ataque = Util.randomizar(10, 200);
  // inimigo.status.defesa = Util.randomizar(10, 1000);
  inimigo.status.esquiva = Util.randomizar(1, 70);
  inimigo.status.vida = Util.randomizar(100, 500);

  return inimigo;
}