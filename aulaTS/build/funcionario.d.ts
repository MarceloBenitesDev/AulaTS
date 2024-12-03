declare class Funcionario {
    nome: string;
    cargo: string;
    private cpf;
    private datanasc;
    private salario;
    constructor(nome: string, cargo: string, cpf: number, datanasc: string, salario: number);
}
