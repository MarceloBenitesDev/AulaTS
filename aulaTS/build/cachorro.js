"use strict";
class Cachorro {
    raca;
    nome;
    porte;
    peso;
    energia;
    constructor(raca, nome, porte, peso, energia) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.peso = peso;
        this.energia = energia;
    }
}
const cachorro = new Cachorro("Shitzu", "Luna", "pequeno", 3, 8);
