//TODO https://abre.ai/poom
const statusMaximo = 250;
const statusMinimo = 1;
export class Status {

  nivel: number = statusMinimo;
  vida: number = statusMinimo;
  esquiva: number = statusMinimo;
  vidaMaxima: number = statusMaximo;
  ataque: number = statusMinimo;
  defesa: number = statusMinimo;
  stamina: number = statusMinimo;
  staminaMaxima: number = statusMaximo;
  mana: number = statusMinimo;
  manaMaxima: number = statusMaximo;
  poderDeAtaque: number = statusMinimo;
  intelecto: number = statusMinimo;
  armadura: number = statusMinimo;
}