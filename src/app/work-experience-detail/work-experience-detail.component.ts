import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    CommonModule
  ],
  templateUrl: './work-experience-detail.component.html'
})
export class WorkExperienceDetailComponent {
  showModal: boolean = false;

  public toggleModal(){
    this.showModal = !this.showModal;
  }
}
