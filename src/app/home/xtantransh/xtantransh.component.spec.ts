import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtantranshComponent } from './xtantransh.component';

describe('XtantranshComponent', () => {
  let component: XtantranshComponent;
  let fixture: ComponentFixture<XtantranshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtantranshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtantranshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
