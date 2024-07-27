import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { EducationHistoryAndAboutMeComponent } from "./education-history-and-about-me/education-history-and-about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, PortfolioComponent, WorkExperienceComponent, EducationHistoryAndAboutMeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
