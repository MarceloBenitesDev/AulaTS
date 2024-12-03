class Funcionario2 {
    public nome: string;
    private salario: number;

    constructor(nome: string, salario: number
    ) {
        this.nome = nome;
        this.salario = salario;
    }

    public exibirInformacoes(): void {
        console.log(`Nome do funcionario: ${this.nome}; Salário do funcionário: ${this.salario}`);
    }

    public aumentarSalario(percentual: number): void {
        console.log(`Aumenta o salario em: ${(percentual / this.salario) * 100}%.`)
    }
}

const funcionario2 = new Funcionario2('Sergio', 7000);
funcionario2.exibirInformacoes();
funcionario2.aumentarSalario(25);
funcionario2.exibirInformacoes();