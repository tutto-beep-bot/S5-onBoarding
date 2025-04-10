import { Injectable } from '@angular/core';
import { iStep } from './iStep'

@Injectable({
  providedIn: 'root'
})

export class StepsService {

  constructor() { }

  getSteps(): iStep[] {
    return [
      {
        title: 'Dedica moltes hores',
        description: 'Un mínim de 30 hores a la setmana. Si no en tens prou...',
        image: '',
        bgcolor: ''
      },
      {
        title: 'Programa projectes propis:',
        description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials...',
        image: '',
        bgcolor: ''
      },
      {
        title: 'Procura descansar:',
        description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès...',
        image: '',
        bgcolor: ''
      }
    ];
  }
}
