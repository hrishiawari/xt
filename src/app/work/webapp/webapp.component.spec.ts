import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappComponent } from './webapp.component';

describe('WebappComponent', () => {
  let component: WebappComponent;
  let fixture: ComponentFixture<WebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
