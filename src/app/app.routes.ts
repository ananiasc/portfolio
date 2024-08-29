import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { PortfolioPageComponent } from "./portfolio-page/portfolio-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  }
]