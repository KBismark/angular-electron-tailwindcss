import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';
import { cn } from '../../../lib/utils';
import {
  RdxTooltipRootDirective,
  RdxTooltipTriggerDirective as RdxTooltipRootTrigger,
  RdxTooltipContentDirective,
  RdxTooltipArrowDirective,
  RdxTooltipAnchorDirective,
  RdxTooltipCloseDirective
} from '@radix-ng/primitives/tooltip';

@Component({
  selector: 'app-tooltip-provider',
  template: '<ng-container rdxTooltipRoot></ng-container>',
  standalone: true
})
export class TooltipProviderComponent {
  
}

@Component({
  selector: 'app-tooltip',
  template: '<ng-container></ng-container>',
  standalone: true,
  imports: [RdxTooltipRootDirective]
})
export class TooltipComponent {}

@Component({
  selector: 'app-tooltip-trigger',
  template: '<ng-container></ng-container>',
  standalone: true,
  imports: [RdxTooltipRootTrigger]
})
export class TooltipTriggerComponent {}

@Component({
  selector: 'app-tooltip-content',
  template: `
    <div
      [class]="cn(
        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )"
      [sideOffset]="sideOffset"
      rdxTooltipContent
    >
      <ng-container></ng-container>
    </div>
  `,
  standalone: true,
  imports: [RdxTooltipContentDirective],
  encapsulation: ViewEncapsulation.None
})
export class TooltipContentComponent {
  @Input() className = '';
  @Input() sideOffset = 4;
}
