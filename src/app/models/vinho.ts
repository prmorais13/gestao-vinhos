export class Vinho {

  constructor(
    public id: number,
    public nome: string,
    public classificacao: string,
    public uva: string,
    public fabricante: string,
    public paisOrigem: string,
    public anoSafra: number,
  ) {}
}
