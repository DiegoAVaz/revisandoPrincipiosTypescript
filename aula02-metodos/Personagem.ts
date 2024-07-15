import promt from "prompt-sync";

export class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesaa: number
  ) {}

  // Toda vez que pensar em ler dados na classe use parâmetro
  // Toda vez que pensar em imprimir dados na classe use retorno

  showStatus(): string {
    return (
      "Guerreiro: \n" +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " + this.energia.toFixed(1)) +
      ("\nAtaque: " + this.ataque.toFixed(1)) +
      ("\nDefesa: " + this.defesaa.toFixed(1))
    );
  }

  treinarAtaque(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;
    if (this.defesaa > 100) {
      this.defesaa = 0;
    }
  }

  treinarDefesa(): void {
    this.defesaa += Math.random() * 5;
    this.energia -= Math.random() * 10;
    if (this.defesaa > 100) {
      this.defesaa = 0;
    }
  }

  descansar(): void {
    this.energia += Math.random() * 10;
    if (this.energia > 100) {
      this.energia = 100;
    }
  }

  entrarEmBatalha(): number {
    let desgaste: number = Math.random() * 100;
    this.energia -= desgaste;
    return desgaste;
  }

  isDead(): boolean {
    if (this.energia < 0) {
      return true;
    } else {
      return false;
    }
  }
}
