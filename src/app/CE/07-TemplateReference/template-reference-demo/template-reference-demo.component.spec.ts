import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceDemoComponent } from './template-reference-demo.component';

describe('TemplateReferenceDemoComponent', () => {
  let component: TemplateReferenceDemoComponent;
  let fixture: ComponentFixture<TemplateReferenceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
