import { Component } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  imports: [],
  templateUrl: './component-lifecycle.html',
  styleUrl: './component-lifecycle.scss',
})
export class ComponentLifecycle {
digram=`
┌────────────────────┐
│   Component Created │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    constructor      │
│ (DI + Init Vars)    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   ngOnChanges       │◄─── @Input Changed
│ (Input Updated)     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    ngOnInit ⭐       │
│ (Load Data / API)  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    ngDoCheck        │
│ (Custom Check)     │
└─────────┬──────────┘
          │
          ▼
┌─────────────────────────────┐
│   ngAfterContentInit        │
│   (ng-content loaded)       │
└─────────┬───────────────────┘
          │
          ▼
┌─────────────────────────────┐
│  ngAfterContentChecked      │
│  (content checked)          │
└─────────┬───────────────────┘
          │
          ▼
┌─────────────────────────────┐
│   ngAfterViewInit ⭐         │
│   (View + ViewChild ready)  │
└─────────┬───────────────────┘
          │
          ▼
┌─────────────────────────────┐
│  ngAfterViewChecked         │
│  (view checked)             │
└─────────┬───────────────────┘
          │
          ▼
┌────────────────────┐
│   User Interaction  │
│   Change Detection  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   ngOnDestroy ⭐     │
│ (Cleanup / Unsub)  │
└────────────────────┘
`;
}
