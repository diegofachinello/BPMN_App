import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequesterComponent } from './create-requester.component';

describe('CreateRequesterComponent', () => {
  let component: CreateRequesterComponent;
  let fixture: ComponentFixture<CreateRequesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
