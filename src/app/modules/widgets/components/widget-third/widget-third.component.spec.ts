import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetThirdComponent } from './widget-third.component';

describe('WidgetThirdComponent', () => {
  let component: WidgetThirdComponent;
  let fixture: ComponentFixture<WidgetThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
