class Produto {
    private codigo: number;
    public nome: string;
    public valorcompra: number;
    public valorvenda: number;
    public qtdestoque: number;

    constructor(codigo: number, nome: string, valorcompra: number,
        valorvenda: number, qtdestoque: number
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.valorcompra = valorcompra;
        this.valorvenda = valorvenda;
        this.qtdestoque = qtdestoque;
    }

    compra(): void {
        console.log(`${this.nome} foi comprado por ${this.valorcompra} reais.`)
    }

    venda(): void {
        console.log(`${this.nome} foi vendido por ${this.valorvenda} reais.`)
    }

    exibirInformacoes(): void {
        console.log(`Nome do produto: ${this.nome}; quantidade de estoque: ${this.qtdestoque}, valor da compra: ${this.valorcompra}; valor vendido: ${this.valorvenda}`);
    }

    calcularTotal(): number {
        return this.valorcompra * this.qtdestoque;
    }
}

const produto = new Produto(234, "sabonete", 20, 70, 92);
produto.compra();
produto.venda();