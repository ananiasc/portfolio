import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
