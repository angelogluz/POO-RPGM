import { Arma } from "./Arma";
import { Personagem } from "./Personagem";

const arma: Arma = new Arma();
arma.nome = 'Cajado';
arma.tipo = 'Mágica';
arma.dano = 99;
arma.nivel = 1;

const personagem: Personagem = new Personagem();
personagem.identificacao.nome = 'Merlin';
personagem.status.armadura = 20;
personagem.status.ataque = 80;
personagem.identificacao.classe = 'Mago';
personagem.status.defesa = 5;
personagem.status.intelecto = 80;
personagem.status.mana = 100;
personagem.status.nivel = 1;
personagem.status.poderDeAtaque = 70;
personagem.status.stamina = 0;
personagem.status.vida = 10;
personagem.identificacao.raca = 'undead';

personagem.arma = arma;

console.log(personagem);

