import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  imports: [],
  templateUrl: './footer-bar.html',
  styleUrl: './footer-bar.css',
})
export class FooterBar {
  @Input() totalCars = 0;
  @Input() totalStock = 0;
}
