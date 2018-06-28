import {InMemoryDbService} from 'angular-in-memory-web-api';

export class VinhoApi implements InMemoryDbService {

  createDb() {
    const vinhos = [
      { id: 1, nome: 'Casillerro Del Diabo', classificacao: 'Tinto', uva: 'Cabernet Sauvignon',
        fabricante: 'Concha y Toro', paisOrigem: 'Chile', anoSafra: 2010 },
      { id: 2, nome: 'Salton Talento', classificacao: 'Tinto', uva: 'Cabernet',
        fabricante: 'Vinícula Salton', paisOrigem: 'Brasil', anoSafra: 2013 },
      { id: 3, nome: 'Salton Desejo', classificacao: 'Tinto', uva: 'Marlot',
        fabricante: 'Vinícula Salton', paisOrigem: 'Chile', anoSafra: 2006 },
    ];

    return { vinhos };
  }
}
