import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFirstComponent } from './widget-first.component';

describe('WidgetFirstComponent', () => {
  let component: WidgetFirstComponent;
  let fixture: ComponentFixture<WidgetFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
