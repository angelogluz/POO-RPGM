export class Util {

  // 10 - 100
  static randomizar(base: number, limite: number): number {
    const sorteado = base + Math.random() * limite - base;

    return Math.round(sorteado)
  }
}