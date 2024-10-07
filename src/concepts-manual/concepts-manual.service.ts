import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  solucionaHome(): string {
    return 'Home do Concepts Manual Solucionada';
  }
}
