class Livro {
    public titulo: string;
    public autor: string;
    public anoPublicado: number;
    private disponivel: boolean;

    constructor(titulo: string, autor: string, anoPublicado: number, disponivel: boolean
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
        this.disponivel = disponivel;
    }

    emprestar(): void {
        if (this.disponivel = true) {
            this.disponivel = false;
            console.log(`O livro ${this.titulo} foi emprestado`);
        } else {
            console.log("Livro indisponivel.")
        }
    }

    devolver(): void {
        if (this.disponivel = false) {
            this.disponivel = true;
            console.log(`O livro ${this.titulo} foi devolvido.`)
        } else {
            console.log("Este livro já foi devolvido.")
        }
    }

    public exibirInformacoes(): void {
        console.log(`Titulo do livro: ${this.titulo}; Autor do livro: ${this.autor}; Ano em que o livro foi publicado: ${this.anoPublicado}; Disponibilidade do livro: ${this.disponivel}`);
    }
}

const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes();
livro.emprestar();
livro.emprestar();
livro.devolver();
livro.exibirInformacoes();