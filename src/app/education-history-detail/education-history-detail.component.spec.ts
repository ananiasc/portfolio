import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryDetailComponent } from './education-history-detail.component';

describe('EducationHistoryDetailComponent', () => {
  let component: EducationHistoryDetailComponent;
  let fixture: ComponentFixture<EducationHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationHistoryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
