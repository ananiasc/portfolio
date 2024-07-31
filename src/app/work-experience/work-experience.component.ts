import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [ TranslateModule, RouterLink ],
  templateUrl: './work-experience.component.html'
})
export class WorkExperienceComponent {

}
