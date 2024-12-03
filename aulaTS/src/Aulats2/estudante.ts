class Estudante {
    public nome: string;
    public idade: number;
    private matricula: string;
    private notas: number[];

    constructor(nome: string, idade: number, matricula: string, notas: number[]
    ) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.notas = notas;
    }

    adicionarNota(nota: number[]): void {
        this.notas = nota
    }

    calcularMedia(): void {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
    }
        const media = soma / this.notas.length;
    }

    public exibirInformacoes(): void {
        console.log(`Nome do Estudante: ${this.nome}; Idade do estudante: ${this.idade}; matricula do estudante: ${this.matricula}; Notas do estudante: ${this.notas}`);
    }

}

const estudante = new Estudante('Lucas', 20, '2023001', [0]);
estudante.adicionarNota([8]);
estudante.adicionarNota([9]);
estudante.adicionarNota([7]);
estudante.exibirInformacoes();