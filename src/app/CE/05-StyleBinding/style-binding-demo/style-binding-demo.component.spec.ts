import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingDemoComponent } from './style-binding-demo.component';

describe('StyleBindingDemoComponent', () => {
  let component: StyleBindingDemoComponent;
  let fixture: ComponentFixture<StyleBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBindingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
