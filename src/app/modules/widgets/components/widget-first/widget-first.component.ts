import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'proshore-widget-first',
  templateUrl: './widget-first.component.html',
  styleUrls: ['./widget-first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetFirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
