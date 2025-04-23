import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common'
import { iStep } from '../../iStep';

@Component({
  selector: 'app-escena',
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() tips: iStep[] = []
  currentStep: number = 0;

  get currentTip(): iStep {
    return this.tips[this.currentStep];
  }

  nextTip(): void {
    if(this.currentStep < this.tips.length -1) {
      this.currentStep++;
    }
  }

  previousTip(): void {
    if(this.currentStep > 0){
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }
}


