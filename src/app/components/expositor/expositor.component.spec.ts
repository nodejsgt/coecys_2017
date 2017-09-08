import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorComponent } from './expositor.component';

describe('ExpositorComponent', () => {
  let component: ExpositorComponent;
  let fixture: ComponentFixture<ExpositorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
