import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-detail',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule, 
  ],
  templateUrl: './about-me-detail.component.html'
})
export class AboutMeDetailComponent {
  showModal: boolean = false;

  public openModal(){
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
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
