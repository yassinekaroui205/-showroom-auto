import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faBoxesStacked, faHeart, faKey, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-auto-detail',
  imports: [FontAwesomeModule],
  templateUrl: './auto-detail.html',
  styleUrl: './auto-detail.css',
})
export class AutoDetail {
  faXmark = faXmark;
  faHeart = faHeart;
  faKey = faKey;
  faBolt = faBolt;
  faBoxesStacked = faBoxesStacked;

  @Input() auto!: Auto;
  @Input() isFavorite = false;
  @Input() similar: Auto[] = [];

  @Output() onClose = new EventEmitter<void>();
  @Output() onToggleFavorite = new EventEmitter<Auto>();
  @Output() onReserve = new EventEmitter<Auto>();
  @Output() onSelectSimilar = new EventEmitter<Auto>();

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.onClose.emit();
  }
}
