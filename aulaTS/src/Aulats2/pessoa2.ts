class Pessoa2 {
    private nome: string;
    private idade: number;
    private altura: number;

    constructor(
        nome: string, idade: number, altura: number
    ) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
       this.idade = idade;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setAltura(altura: number): void {
        this.altura = altura;
    }

    apresentar(): void {
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e minha altura é ${this.altura} metros.`)
    }

    fazerAniversario(): void {
        console.log(`Feliz aniversário! Agora voce tem ${this.idade + 1} anos!!`)
    }
}

const pessoa2 = new Pessoa2('Alfredo', 14, 2.8);
pessoa2.apresentar();
pessoa2.fazerAniversario();