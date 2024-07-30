import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-and-language-control',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './resume-and-language-control.component.html'
})
export class ResumeAndLanguageControlComponent {
  translate: TranslateService = inject(TranslateService);

  translateText(language: string) {
    this.translate.use(language);
  }
}
