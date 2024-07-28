import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAndLanguageControlComponent } from './resume-and-language-control.component';

describe('ResumeAndLanguageControlComponent', () => {
  let component: ResumeAndLanguageControlComponent;
  let fixture: ComponentFixture<ResumeAndLanguageControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeAndLanguageControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeAndLanguageControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
