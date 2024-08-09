import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeDetailComponent } from './about-me-detail.component';

describe('AboutMeDetailComponent', () => {
  let component: AboutMeDetailComponent;
  let fixture: ComponentFixture<AboutMeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
