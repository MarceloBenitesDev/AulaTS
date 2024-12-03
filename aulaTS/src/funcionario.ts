class Funcionario {
    public nome: string;
    public cargo: string;
    private cpf: number;
    private datanasc: number;
    private salario: number;
    private cargahoraria: number;

    constructor(nome: string, cargo: string, cpf: number, datanasc: number,
        salario: number, cargahoraria: number
    ) {
        this.nome = nome;
        this.cargo = cargo;
        this.cpf = cpf;
        this.datanasc = datanasc;
        this.salario = salario;
        this.cargahoraria = cargahoraria;
    }

    thabalhar(): void {
        console.log(`${this.nome} thabalhou no cargo de ${this.cargo} por ${this.cargahoraria}.`)
    }

    receberSalario(): void {
        console.log(`${this.nome} recebeu ${this.salario} reais.`)
    }

    intervalo(): void {
        console.log(`${this.nome} deu uma pausa no serviço e foi pro intervalo.`)
    }
}

const funcionario = new Funcionario("Leandro", "engenheiro", 88899977712, 2015-0o6-23, 6700, 8);
funcionario.thabalhar();
funcionario.receberSalario();
funcionario.intervalo();