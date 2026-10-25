import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faEye, faHeart, faKey } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-auto-card',
  imports: [FontAwesomeModule],
  templateUrl: './auto-card.html',
  styleUrl: './auto-card.css',
})
export class AutoCard {
  faHeart = faHeart;
  faEye = faEye;
  faKey = faKey;
  faBolt = faBolt;

  @Input() auto!: Auto;
  @Input() isFavorite = false;
  @Input() maxPower = 25;

  @Output() onSelect = new EventEmitter<Auto>();
  @Output() onToggleFavorite = new EventEmitter<Auto>();
  @Output() onReserve = new EventEmitter<Auto>();

  get powerPercent(): number {
    return Math.min(100, Math.round((this.auto.power / this.maxPower) * 100));
  }

  get stockLabel(): string {
    if (this.auto.availability <= 0) return 'Out of stock';
    if (this.auto.availability <= 2) return 'Only ' + this.auto.availability + ' left';
    return this.auto.availability + ' in stock';
  }

  get stockClass(): string {
    if (this.auto.availability <= 0) return 'out';
    if (this.auto.availability <= 2) return 'low';
    return 'ok';
  }
}
