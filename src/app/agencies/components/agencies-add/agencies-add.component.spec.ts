import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesAddComponent } from './agencies-add.component';

describe('AgenciesAddComponent', () => {
  let component: AgenciesAddComponent;
  let fixture: ComponentFixture<AgenciesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
