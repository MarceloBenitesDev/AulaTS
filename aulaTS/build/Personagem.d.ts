declare class Personagem {
    nome: string;
    energia: number;
    ataque: string;
    defesa: number;
    raca: string;
    mana: number;
    poderataque: number;
    intelecto: number;
    armadura: number;
    constructor(nome: string, energia: number, ataque: string, defesa: number, raca: string, mana: number, poderataque: number, intelecto: number, armadura: number);
    atacar(): void;
    defender(): void;
}
declare const personagem: Personagem;
