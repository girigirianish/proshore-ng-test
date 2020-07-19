import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCreaterPage } from './widget-creater.page';

describe('WidgetCreaterComponent', () => {
  let component: WidgetCreaterPage;
  let fixture: ComponentFixture<WidgetCreaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetCreaterPage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCreaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
