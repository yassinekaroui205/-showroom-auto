import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
import { AutoCard } from '../auto-card/auto-card';

@Component({
  selector: 'app-auto-list',
  imports: [AutoCard, FontAwesomeModule],
  templateUrl: './auto-list.html',
  styleUrl: './auto-list.css',
})
export class AutoList {
  faFaceFrown = faFaceFrown;

  @Input() autos: Auto[] = [];
  @Input() favoriteIds: number[] = [];

  @Output() onSelect = new EventEmitter<Auto>();
  @Output() onToggleFavorite = new EventEmitter<Auto>();
  @Output() onReserve = new EventEmitter<Auto>();

  isFavorite(auto: Auto): boolean {
    return this.favoriteIds.includes(auto.id);
  }
}
