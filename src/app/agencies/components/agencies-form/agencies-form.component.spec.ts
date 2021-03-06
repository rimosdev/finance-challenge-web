import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesFormComponent } from './agencies-form.component';

describe('AgenciesFormComponent', () => {
  let component: AgenciesFormComponent;
  let fixture: ComponentFixture<AgenciesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
