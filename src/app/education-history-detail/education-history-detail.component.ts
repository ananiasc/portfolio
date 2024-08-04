import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    CommonModule,
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
    this.toggleLanguage();
  }

  public toggleModal(){
    this.showModal = !this.showModal;
    if(this.showModal)
      this.toggleLanguage();
  }

  private toggleLanguage() {
    this.translate.get('educationalHistory').subscribe((res: []) => {
      this.educations = res;
    });
  }
}
