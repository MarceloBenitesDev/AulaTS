class Cliente2 {
    public nome: string;
    private email: string;
    private telefone: number;

    constructor(nome: string, email: string, telefone: number
    ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public atualizarEmail(novoEmail: string): void {
        this.email = novoEmail;
    }

    atualizarTelefone(novoTelefone: number): void {
        this.telefone = novoTelefone;

    }

    public exibirInformacoes(): void {
        console.log(`Nome do cliente: ${this.nome}; Email do cliente: ${this.email}; Telefone do cliente: ${this.telefone}`);
    }
}

const cliente2 = new Cliente2('Maria', 'maria@email.com', 123456789);
cliente2.exibirInformacoes();
cliente2.atualizarEmail('maria@novoemail.com');
cliente2.atualizarTelefone(987654321);
cliente2.exibirInformacoes();