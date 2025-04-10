import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common'
import { iStep } from '../../iStep';

@Component({
  selector: 'app-escena',
  imports: [NgFor],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() tips: iStep[] = []
}
