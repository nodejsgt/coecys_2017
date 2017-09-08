import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorTalleresComponent } from './expositor-talleres.component';

describe('ExpositorTalleresComponent', () => {
  let component: ExpositorTalleresComponent;
  let fixture: ComponentFixture<ExpositorTalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositorTalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositorTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
