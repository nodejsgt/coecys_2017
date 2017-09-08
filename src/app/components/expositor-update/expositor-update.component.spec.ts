import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorUpdateComponent } from './expositor-update.component';

describe('ExpositorUpdateComponent', () => {
  let component: ExpositorUpdateComponent;
  let fixture: ComponentFixture<ExpositorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
