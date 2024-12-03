class Cachorro {
    public raca: string;
    public nome: string;
    public porte: string;
    public peso: number;
    public energia: number;

    constructor(raca: string, nome: string, porte: string, peso: number,
        energia: number
    ) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.peso = peso;
        this.energia = energia;
    }

    public latir(): void {
        console.log(`${this.nome}: Au Au AU`)
    }

    public comer(): void {
        console.log(`${this.nome} acabou de comer!`)
    }

    public dormir(): void {

        if (this.energia <= 15) {
        console.log(`${this.nome} está com ${this.energia} de energia e dormiu.`)
        } else {
            console.log(`${this.nome} tentou dormir, mas não estava cansado.`)
        }
    }
}

const cachorro = new Cachorro("Shitzu", "Luna", "pequeno", 3, 8);
cachorro.latir();
cachorro.comer();
cachorro.dormir();