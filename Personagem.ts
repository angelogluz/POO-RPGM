import { Arma } from "./Arma";
import { Identificacao } from "./Identificacao";
import { Status } from "./Status";
import { Util } from "./Util";

export class Personagem {

  identificacao: Identificacao = new Identificacao();
  status: Status = new Status();

  arma: Arma = new Arma();

  constructor(nome: string, raca: string, classe: string, armaTipo: string, armaNome: string) {
    this.identificacao.nome = nome;
    this.identificacao.raca = raca;
    this.identificacao.classe = classe;
    this.arma.nome = armaNome;
    this.arma.tipo = armaTipo;

    this.status.armadura = 1;
    this.status.ataque = 20;
    this.status.defesa = Util.randomizar(1, 50);
    this.status.intelecto = Util.randomizar(1, 100)
    this.status.mana = this.status.intelecto * 4.5;
    this.status.nivel = 1;
    this.status.poderDeAtaque = this.status.ataque * 3.5;
    this.status.stamina = Util.randomizar(1, 100);
    this.status.vida = Util.randomizar(10, 1000)
    this.arma.nivel = Util.randomizar(1, 6)
    this.arma.dano = Math.round(this.arma.nivel * Util.randomizar(1, 10));
  }

  treinarAtaque(): boolean {
    let continua = true;
    this.status.ataque = Math.round(this.status.ataque * 2.1);
    this.status.stamina = Math.round(this.status.staminaMaxima - Util.randomizar(10, 20));
    if (this.status.stamina <= 0) {
      continua = false;
    }
    return continua;
  }

  treinarDefesa(tempoEmHoras: number): boolean {

    const incrementoDeDefesaAposTreino = Math.round(Util.randomizar(1, tempoEmHoras) * (1.1 * this.status.defesa));
    const reducaoDeStaminaAposTreino = Math.round(Util.randomizar(1, tempoEmHoras)) * (this.status.staminaMaxima * 0.1) + 10;

    this.status.defesa += incrementoDeDefesaAposTreino;
    this.status.stamina -= reducaoDeStaminaAposTreino;

    const continua = this.status.stamina > 0
    return continua;
  }

  atacar(inimigo: Personagem): void {
    this.ataque(inimigo)
    inimigo.ataque(this)

  }

  // contraAtacar(personagem: Personagem) {
  //   return this.ataque(personagem)
  // }

  ataque(inimigo: Personagem) {
    const dado: number = Util.randomizar(1, 100);

    const acertouGolpe = dado > inimigo.status.esquiva;

    let danoCausado: number = 0;
    if (acertouGolpe) {
      const variacaoDeAtaque: number = Util.randomizar(this.status.poderDeAtaque / 2, this.status.poderDeAtaque);

      danoCausado = variacaoDeAtaque * (inimigo.status.defesa / 100);

      inimigo.status.vida -= danoCausado;

    }
    return danoCausado;
  }

  tirarSoneca(tempoDescanso: number) {
    this.status.stamina += (this.status.staminaMaxima / 10) * tempoDescanso;
    if (this.status.stamina > this.status.staminaMaxima) {
      this.status.stamina = this.status.staminaMaxima;
    }
  }

}


