import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgVideoComponent } from './bg-video.component';

describe('BgVideoComponent', () => {
  let component: BgVideoComponent;
  let fixture: ComponentFixture<BgVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
