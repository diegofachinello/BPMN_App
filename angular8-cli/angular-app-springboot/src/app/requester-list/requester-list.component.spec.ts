import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterListComponent } from './requester-list.component';

describe('RequesterListComponent', () => {
  let component: RequesterListComponent;
  let fixture: ComponentFixture<RequesterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
