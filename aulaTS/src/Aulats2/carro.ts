class Carro {
    public marca: string;
    public modelo: string;
    public ano: number;
    public quilometragem: number;

    constructor(marca: string, modelo: string, ano: number, quilometragem: number

    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }

    public exibirInformacoes(): void {
        console.log(`Nome da marca: ${this.marca}; Nome do modelo: ${this.modelo},Ano de lançamento: ${this.ano}; Quilometragem: ${this.quilometragem}`) 
    }

    public andar(km: number): void {
        console.log(`O carro andou ${km} km.`)
    }
}

const meuCarro = new Carro ('Fiat', 'Uno', 2020, 10000);
meuCarro.exibirInformacoes();
meuCarro.andar(25);