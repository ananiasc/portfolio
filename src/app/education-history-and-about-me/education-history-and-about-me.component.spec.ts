import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryAndAboutMeComponent } from './education-history-and-about-me.component';

describe('EducationHistoryAndAboutMeComponent', () => {
  let component: EducationHistoryAndAboutMeComponent;
  let fixture: ComponentFixture<EducationHistoryAndAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationHistoryAndAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationHistoryAndAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
