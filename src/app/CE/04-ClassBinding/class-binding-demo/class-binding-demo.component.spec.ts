import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingDemoComponent } from './class-binding-demo.component';

describe('ClassBindingDemoComponent', () => {
  let component: ClassBindingDemoComponent;
  let fixture: ComponentFixture<ClassBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBindingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
