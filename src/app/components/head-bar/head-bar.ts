import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faHeart, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-head-bar',
  imports: [FontAwesomeModule],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css',
})
export class HeadBar {
  faCar = faCar;
  faHeart = faHeart;
  faKey = faKey;

  @Input() title = '';
  @Input() favoritesCount = 0;
  @Input() reservationsCount = 0;
  @Input() favoritesActive = false;

  @Output() onToggleFavorites = new EventEmitter<void>();
  @Output() onOpenReservations = new EventEmitter<void>();
}
