import { Component, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EducationHistoryDetailComponent } from '../education-history-detail/education-history-detail.component';
import { AboutMeDetailComponent } from '../about-me-detail/about-me-detail.component';

@Component({
  selector: 'app-education-history-and-about-me',
  standalone: true,
  imports: [
    TranslateModule, 
    EducationHistoryDetailComponent,
    AboutMeDetailComponent,
  ],
  templateUrl: './education-history-and-about-me.component.html'
})
export class EducationHistoryAndAboutMeComponent {
  @ViewChild(EducationHistoryDetailComponent) educationDetail!: EducationHistoryDetailComponent;
  @ViewChild(AboutMeDetailComponent) aboutMeDetail!: AboutMeDetailComponent;

  toggleModaEducationDetail() {
    this.educationDetail.toggleModal();
  }

  openModalAboutMeDetail() {
    this.aboutMeDetail.openModal();
  }
}
