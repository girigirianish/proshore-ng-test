import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'proshore-widget-second',
  templateUrl: './widget-second.component.html',
  styleUrls: ['./widget-second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetSecondComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
