import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesItemComponent } from './agencies-item.component';

describe('AgenciesItemComponent', () => {
  let component: AgenciesItemComponent;
  let fixture: ComponentFixture<AgenciesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
