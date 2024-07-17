import promt from "prompt-sync";
import { Personagem } from "./Personagem";

let person: Personagem = new Personagem("Sansa Stark", 100, 80, 30, 20);

let teclado = promt();
let option: number = 0;

while (option != 9 || person.isDead()) {
  console.log("************* OPÇÕES ***********");
  console.log("|1. Treinar ataque             |");
  console.log("|2. Treinar defesa             |");
  console.log("|3. Descansar                  |");
  console.log("|4. Entrar em batalha          |");
  console.log("|8. Imprimir atributos         |");
  console.log("|9. Sair                       |");
  console.log("********************************");

  option = +teclado("Escolha uma ação: ");

  switch (option) {
    case 1:
      person.treinarAtaque();
      console.log(person.showStatus());
      break;
    case 2:
      person.treinarDefesa();
      console.log(person.showStatus());
      break;
    case 3:
      let horas: number = +teclado("Quantas horas de descanso? ");
      person.descansar(horas);
      console.log(person.showStatus());
      break;
    case 4:
      let rest: number = person.entrarEmBatalha();
      console.log(`Esta batalha custou ${rest} de energia`);
      console.log(person.showStatus());
      break;
    case 8:
      console.log(person.showStatus());
      break;
    case 9:
      console.log("Dando a própria vida em sacrifício");
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}

console.log("Você morreu");
