import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ 
    TranslateModule,
    RouterLink,
   ],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {

}
