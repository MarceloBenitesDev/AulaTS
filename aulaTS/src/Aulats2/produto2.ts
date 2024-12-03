class Produto2 {
    public nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number
    ) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    adicionarEstoque(qtd: number): void {
        if (qtd <= 0) {
            console.log(`Adicione uma quantidade maior que 0.`);
            return;
        }
        this.quantidade += qtd;
        console.log(`Adicionado ${qtd} unidades ao estoque de ${this.nome}.`)
    }

    removerEstoque(qtd: number): void {
        if (qtd <= 0) {
            console.log("Adicione um valor maior que 0.")
        }
        if (this.quantidade >= 0) {
            this.quantidade -= qtd;
            console.log(`Removido ${qtd} unidades de ${this.nome}`);
        } else {
            console.log("Quantidade insuficiente");
        }
    }

    public exibirInformacoes(): void {
        console.log(`Nome do produto: ${this.nome}; Preço: ${this.preco.toFixed(2)}; quantidade disponivel: ${this.quantidade}`);
    }
}

const produto2 = new Produto2('Camiseta', 50, 10);
produto2.exibirInformacoes();
produto2.adicionarEstoque(5);
produto2.removerEstoque(3);
produto2.exibirInformacoes();
produto2.removerEstoque(15);