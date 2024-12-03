"use strict";
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
const pessoa = new Pessoa("Renata", 4);
pessoa.exibirInformacoes();
