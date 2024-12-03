class Veiculo {
    public marca: string;
    public modelo: string;
    private placa: string;
    public velocidade: number;
    public numcavalos: number;
    public cor: string;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, numcavalos: number, cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.numcavalos = numcavalos;
        this.cor = cor;
    }

    acelerar(): void {
        console.log(`O carro ${this.modelo} acelerou à ${this.velocidade} km/h.`)
    }

    frear(): void {
        console.log(`O carro ${this.modelo} freou após após chegar ao destino.`)
    }

    buzinar(): void {
        console.log(`O carro ${this.modelo} buzinou durante um engarrafamento.`)
    }
}

const veiculo = new Veiculo("Chevrolet", "S10", "MBK9395", 70, 12, "Cinza");
veiculo.acelerar();
veiculo.frear();
veiculo.buzinar();