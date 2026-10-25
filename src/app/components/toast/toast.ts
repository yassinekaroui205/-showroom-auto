import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleInfo, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastMessage } from '../../interfaces/toast-message';

@Component({
  selector: 'app-toast',
  imports: [FontAwesomeModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  faXmark = faXmark;

  @Input() message!: ToastMessage;
  @Output() onClose = new EventEmitter<void>();

  get icon() {
    if (this.message.type === 'success') return faCircleCheck;
    if (this.message.type === 'warning') return faTriangleExclamation;
    return faCircleInfo;
  }
}
