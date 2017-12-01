import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidappsComponent } from './androidapps.component';

describe('AndroidappsComponent', () => {
  let component: AndroidappsComponent;
  let fixture: ComponentFixture<AndroidappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
