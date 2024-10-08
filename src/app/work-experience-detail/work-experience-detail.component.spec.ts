import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDetailComponent } from './work-experience-detail.component';

describe('WorkExperienceDetailComponent', () => {
  let component: WorkExperienceDetailComponent;
  let fixture: ComponentFixture<WorkExperienceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperienceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
