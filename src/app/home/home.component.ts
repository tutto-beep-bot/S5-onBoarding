import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { iStep } from '../iStep';
import { EscenaComponent } from './escena/escena.component';

@Component({
  selector: 'app-home',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  steps: iStep[] = []

  constructor(private stepsService: StepsService) {
    this.steps = this.stepsService.getSteps()
  }

}
