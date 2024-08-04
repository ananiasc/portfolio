import { Component, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EducationHistoryDetailComponent } from '../education-history-detail/education-history-detail.component';

@Component({
  selector: 'app-education-history-and-about-me',
  standalone: true,
  imports: [
    TranslateModule, 
    EducationHistoryDetailComponent
  ],
  templateUrl: './education-history-and-about-me.component.html'
})
export class EducationHistoryAndAboutMeComponent {
  @ViewChild(EducationHistoryDetailComponent) educationDetail!: EducationHistoryDetailComponent;

  toggleModal() {
    this.educationDetail.toggleModal();
  }
}
