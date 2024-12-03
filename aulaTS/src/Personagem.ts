class Personagem {
    public nome: string;
    public energia: number;
    public ataque: string;
    public defesa: number;
    public raca: string;
    public mana: number;
    public poderataque: number;
    public intelecto: number;
    public armadura: number;

    constructor(nome: string, energia: number, ataque: string,
        defesa: number, raca: string, mana: number, poderataque: number,
        intelecto: number, armadura: number
    ) {
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

    public atacar(): void {
      console.log(`${this.nome} fez ${this.ataque} e fez ${this.poderataque} de dano!!`);
    }

    public defender(): void {
        console.log(`${this.nome} defendeu o ataque do inimigo!!`)
    }

}

const personagem = new Personagem("Mago", 5, "raio a jato", 56, "Humano", 70, 120, 47, 35);
personagem.atacar();
personagem.defender();