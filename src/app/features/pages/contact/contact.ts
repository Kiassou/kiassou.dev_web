import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { dotPulse } from 'ldrs'
dotPulse.register()

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  showContactModal = false;
  loading = false;
  success = false;

  project = {
    fullname: '',
    phone: '',
    email: '',
    message: ''
  };

  openContactModal(): void {
    this.showContactModal = true;
    this.success = false;
    document.body.style.overflow = 'hidden';
  }

  closeContactModal(): void {
    this.showContactModal = false;
    document.body.style.overflow = 'auto';
  }

  async submitProject(form: NgForm): Promise<void> {
    if (form.invalid) return;

    this.loading = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      this.success = true;
      form.resetForm();
      this.project = { fullname: '', phone: '', email: '', message: '' };
    } finally {
      this.loading = false;
    }
  }

  finish(): void {
    this.success = false;
    this.closeContactModal();
  }

  @HostListener('window:keydown.escape')
  onEsc(): void {
    if (this.showContactModal) this.closeContactModal();
  }
}