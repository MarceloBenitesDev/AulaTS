"use strict";
class Cliente {
    nome;
    cpf;
    qtddinheiro;
    constructor(nome, cpf, qtddinheiro) {
        this.nome = nome;
        this.cpf = cpf;
        this.qtddinheiro = qtddinheiro;
    }
}
const cliente = new Cliente("Jonas", 23310010010, 78);
