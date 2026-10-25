import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Reservation } from '../../interfaces/reservation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservation-panel',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './reservation-panel.html',
  styleUrl: './reservation-panel.css',
})
export class ReservationPanel {
  faXmark = faXmark;
  faTrash = faTrash;

  @Input() reservations: Reservation[] = [];

  @Output() onClose = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<Reservation>();
  @Output() onClear = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.onClose.emit();
  }

  get total(): number {
    return this.reservations.reduce((sum, r) => sum + r.auto.price, 0);
  }
}
