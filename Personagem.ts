import { Arma } from "./Arma";
import { Identificacao } from "./Identificacao";
import { Status } from "./Status";

export class Personagem {

  identificacao: Identificacao = new Identificacao();
  status: Status = new Status();

  arma: Arma = new Arma();

}


