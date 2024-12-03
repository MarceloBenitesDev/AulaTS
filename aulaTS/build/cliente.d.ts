declare class Cliente {
    nome: string;
    private cpf;
    private qtddinheiro;
    constructor(nome: string, cpf: number, qtddinheiro: number);
}
declare const cliente: Cliente;
