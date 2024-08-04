import { Component, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WorkExperienceDetailComponent } from "../work-experience-detail/work-experience-detail.component";

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    TranslateModule, 
    WorkExperienceDetailComponent
  ],
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent {
  @ViewChild(WorkExperienceDetailComponent) workDetail!: WorkExperienceDetailComponent;

  toggleModal() {
    this.workDetail.toggleModal();
  }
}
