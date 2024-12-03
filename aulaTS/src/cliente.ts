class Cliente {
   public nome: string;
   private cpf: number;
   private qtddinheiro: number;
   private valorpago: number;

   constructor (nome: string, cpf: number, qtddinheiro: number, valorpago: number
   ) {
    this.nome = nome;
    this.cpf = cpf;
    this.qtddinheiro = qtddinheiro;
    this.valorpago = valorpago;
   }

   public getNome(): string {
      return this.nome;
  }

  public setNome(nome: string): void {
      this.nome = nome;
  }

  private getQtd(): number {
   return this.qtddinheiro;
  }

  private setQtd(qtddinheiro : number): void {
   this.qtddinheiro = qtddinheiro;
  }

  public exibirInformacoes(): void {
   console.log(`Nome do cliente: ${this.nome}; CPF do cliente: ${this.cpf}; dinheiro na conta: ${this.qtddinheiro}.`);
  }

  public pagar(): void {
   console.log(`${this.nome} pagou ${this.valorpago} reais.`);
  }
}

const cliente = new Cliente("Jonas", 23310010010, 78, 23);
cliente.exibirInformacoes();
cliente.pagar();
