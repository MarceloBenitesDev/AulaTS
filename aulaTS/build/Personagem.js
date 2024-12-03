"use strict";
class Personagem {
    nome;
    energia;
    ataque;
    defesa;
    raca;
    mana;
    poderataque;
    intelecto;
    armadura;
    constructor(nome, energia, ataque, defesa, raca, mana, poderataque, intelecto, armadura) {
        this.nome = nome;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
        this.raca = raca;
        this.mana = mana;
        this.poderataque = poderataque;
        this.intelecto = intelecto;
        this.armadura = armadura;
    }
    atacar() {
        console.log(`${this.nome} fez ${this.ataque} e fez ${this.poderataque} de dano!!`);
    }
    defender() {
        console.log(`${this.nome} defendeu o ataque do inimigo!!`);
    }
}
const personagem = new Personagem("Mago", 5, "raio a jato", 56, "Humano", 70, 120, 47, 35);
personagem.atacar();
personagem.defender();
