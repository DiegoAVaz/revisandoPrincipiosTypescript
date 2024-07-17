import promt from "prompt-sync";

export class Personagem {
  constructor(
    // Para atender aos princípio do encapsulamento, atributos devem ser privados ou protected qdo usado em herança
    // Por convenção, de atributos têm um undeline _
    private _nome: string,
    private _energia: number,
    private _vida: number,
    private _ataque: number,
    private _defesaa: number
  ) {}

  // Toda vez que pensar em ler dados na classe use parâmetro
  // Toda vez que pensar em imprimir dados na classe use retorno

  // Os métodos devem ser publicos, a menos que seja um método que rode apenas internamente na classe

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public showStatus(): string {
    return (
      "Guerreiro: \n" +
      "\nNome: " +
      this._nome +
      ("\nEnergia: " + this._energia.toFixed(1)) +
      ("\nAtaque: " + this._ataque.toFixed(1)) +
      ("\nDefesa: " + this._defesaa.toFixed(1))
    );
  }

  public treinarAtaque(): void {
    this._ataque += this.randomizar(7);
    this._energia -= this.randomizar(10);
    if (this._defesaa > 100) {
      this._defesaa = 0;
    }
  }

  public treinarDefesa(): void {
    this._defesaa += this.randomizar(5);
    this._energia -= this.randomizar(10);
    if (this._defesaa > 100) {
      this._defesaa = 0;
    }
  }

  public descansar(horas: number): void {
    this._energia += horas * this.randomizar(10);
    if (this._energia > 100) {
      this._energia = 100;
    }
  }

  public entrarEmBatalha(): number {
    let desgaste: number = this.randomizar(100);
    this._energia -= desgaste;
    return desgaste;
  }

  public isDead(): boolean {
    return this._energia < 0;
  }

  private randomizar(fator: number) {
    return Math.random() * fator;
  }
}
