import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface Experience {
  title: string,
  period: string,
  companyName: string,
  companyDescription: string,
  experienceDescription: string,
  skills: string
}

@Component({
  selector: 'app-work-experience-detail',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    TranslateModule, 
  ],
  templateUrl: './work-experience-detail.component.html'
})
export class WorkExperienceDetailComponent {
  showModal = signal(false);
  experiences: Experience[] = [];

  constructor(
    private translate: TranslateService,
  ) {
    this.updateByLanguage();
  }

  public openModal() {
    this.showModal.set(true);
    this.updateByLanguage();
  }

  closeModal() {
    this.showModal.set(false);
  }

  private updateByLanguage() {
    this.translate.get('experiences').subscribe((res: []) => {
      this.experiences = res;
    });
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
