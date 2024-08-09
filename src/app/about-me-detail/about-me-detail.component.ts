import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  showModal: boolean = false;

  public toggleModal(){
    this.showModal = !this.showModal;
  }
}
