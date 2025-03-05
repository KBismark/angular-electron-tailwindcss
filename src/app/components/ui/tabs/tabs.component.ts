import { Component, Input, input } from '@angular/core';
import {
  RdxTabsRootDirective,
  RdxTabsListDirective,
  RdxTabsTriggerDirective,
  RdxTabsContentDirective
} from '@radix-ng/primitives/tabs';

@Component({
  selector: 'app-tabs',
  template: '<ng-container rdxTabsRoot [defaultValue]="defaultValue"><ng-content></ng-content></ng-container>',
  standalone: true,
  imports: [RdxTabsRootDirective]
})
export class TabsComponent {
  @Input({required: true}) defaultValue!: string;
}

@Component({
  selector: 'app-tabs-list',
  template: '<ng-container rdxTabsList><ng-content></ng-content></ng-container>',
  standalone: true,
  imports: [RdxTabsListDirective],
  host: {
    'class': 'inline-flex h-10 items-center justify-start rounded-none bg-transparent p-0 text-slate-500'
  }
})
export class TabsListComponent {}

@Component({
  selector: 'app-tabs-trigger',
  template: '<ng-container rdxTabsTrigger [value]="value" ><ng-content></ng-content></ng-container>',
  standalone: true,
  imports: [RdxTabsTriggerDirective],
  host: {
    'class': 'inline-flex items-center justify-center whitespace-nowrap py-3 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500'
  }
})
export class TabsTriggerComponent {
  @Input() value: string = '';
}

@Component({
  selector: 'app-tabs-content',
  template: '<ng-container rdxTabsContent [value]="value" ><ng-content></ng-content></ng-container>',
  standalone: true,
  imports: [RdxTabsContentDirective],
  host: {
    'class': 'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2'
  }
})
export class TabsContentComponent {
  @Input() value: string = '';
}
