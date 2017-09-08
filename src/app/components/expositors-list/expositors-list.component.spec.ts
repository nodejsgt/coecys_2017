import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositorsListComponent } from './expositors-list.component';

describe('ExpositorsListComponent', () => {
  let component: ExpositorsListComponent;
  let fixture: ComponentFixture<ExpositorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpositorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
