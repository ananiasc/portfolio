import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Education {
  title: string,
  institution: string,
  period: string,
  educationDescription: string,
}

@Component({
  selector: 'app-about-me-detail',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule, 
  ],
  templateUrl: './about-me-detail.component.html'
})
export class AboutMeDetailComponent {
  showModal = signal(false);

  public openModal(){
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  closeModalOnOutSideClick(event: MouseEvent) {
    const tartegElement = event.target as HTMLElement;
    if(tartegElement.classList.contains('fixed')) {
      this.closeModal();
    }
  }
  
  @HostListener('document:keydown.escape', ['$event']) 
  onKeydownHandler(event: KeyboardEvent) {
    this.closeModal();
  }
}
