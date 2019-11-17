import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequesterComponent } from './update-requester.component';

describe('UpdateRequesterComponent', () => {
  let component: UpdateRequesterComponent;
  let fixture: ComponentFixture<UpdateRequesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRequesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
