import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Education {
  title: string,
  institution: string,
  period: string,
  educationDescription: string,
}

@Component({
  selector: 'app-education-history-detail',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    TranslateModule, 
  ],
  templateUrl: './education-history-detail.component.html'
})
export class EducationHistoryDetailComponent {
  showModal: boolean = false;
  educations: Education[] = [];

  constructor(
    private translate: TranslateService,
  ) {
    this.updateByLanguage();
  }

  public openModal(){
    this.showModal =true;
    this.updateByLanguage();
  }

  private updateByLanguage() {
    this.translate.get('educationalHistory').subscribe((res: []) => {
      this.educations = res;
    });
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
