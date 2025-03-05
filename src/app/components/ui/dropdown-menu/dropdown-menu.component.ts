import { Component, ElementRef, Input, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import {
  // RdxDropdownMenuCloseDirective,
  RdxDropdownMenuContentDirective,
  RdxDropdownMenuItemDirective,
  RdxDropdownMenuLabelDirective,
  // RdxDropdownMenuPortalDirective,
  RdxDropdownMenuItemRadioGroupDirective,
  RdxDropdownMenuItemRadioDirective,
  RdxDropdownMenuSeparatorDirective,
  // RdxDropdownMenuSubContentDirective,
  // RdxDropdownMenuSubTriggerDirective,
  RdxDropdownMenuTriggerDirective,
  RdxDropdownMenuItemCheckboxDirective
} from '@radix-ng/primitives/dropdown-menu';
import { LucideAngularModule, Check, ChevronRight, Circle } from 'lucide-angular';
import { cn } from '../../../lib/utils';

@Component({
  selector: 'app-dropdown-menu',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class DropdownMenuComponent {}

@Component({
  selector: 'app-dropdown-menu-trigger',
  template: '<ng-content></ng-content>',
  standalone: true,
  imports: [RdxDropdownMenuTriggerDirective]
})
export class DropdownMenuTriggerComponent {}

@Component({
  selector: 'app-dropdown-menu-group',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class DropdownMenuGroupComponent {}

// @Component({
//   selector: 'app-dropdown-menu-portal',
//   template: '<ng-content></ng-content>',
//   standalone: true,
//   imports: [RdxDropdownMenuPortalDirective]
// })
// export class DropdownMenuPortalComponent {}

@Component({
  selector: 'app-dropdown-menu-sub',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class DropdownMenuSubComponent {}

@Component({
  selector: 'app-dropdown-menu-radio-group',
  template: '<ng-content></ng-content>',
  standalone: true,
  imports: [RdxDropdownMenuItemRadioGroupDirective]
})
export class DropdownMenuRadioGroupComponent {}

@Component({
  selector: 'app-dropdown-menu-sub-trigger',
  template: `
    <div
      [class]="cn(
        'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className
      )"
    >
      <ng-content></ng-content>
      <lucide-chevron-right class="ml-auto"></lucide-chevron-right>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuTriggerDirective, ChevronRight]
})


export class DropdownMenuSubTriggerComponent {
  @Input() className?: string;
  @Input() inset?: boolean;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-sub-content',
  template: `
    <div
      [class]="cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )"
    >
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuContentDirective]
})
export class DropdownMenuSubContentComponent {
  @Input() className?: string;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-content',
  template: `
    <div
      [class]="cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )"
      [style.--side-offset.px]="sideOffset"
    >
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuContentDirective]
})
export class DropdownMenuContentComponent {
  @Input() className?: string;
  @Input() sideOffset = 4;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-item',
  template: `
    <div
      [class]="cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className
      )"
    >
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuItemDirective]
})
export class DropdownMenuItemComponent {
  @Input() className?: string;
  @Input() inset?: boolean;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-checkbox-item',
  template: `
    <div
      [class]="cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )"
      [attr.data-state]="checked ? 'checked' : 'unchecked'"
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ng-container *ngIf="checked">
          <lucide-check class="h-4 w-4"></lucide-check>
        </ng-container>
      </span>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuItemCheckboxDirective, Check, LucideAngularModule]
})
export class DropdownMenuCheckboxItemComponent {
  @Input() className?: string;
  @Input() checked = false;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-radio-item',
  template: `
    <div
      [class]="cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )"
    >
      <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ng-container *ngIf="checked">
          <lucide-circle class="h-2 w-2 fill-current"></lucide-circle>
        </ng-container>
      </span>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuItemRadioDirective, Circle, LucideAngularModule]
})
export class DropdownMenuRadioItemComponent {
  @Input() className?: string;
  @Input() checked = false;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-label',
  template: `
    <div
      [class]="cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className
      )"
    >
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuLabelDirective]
})
export class DropdownMenuLabelComponent {
  @Input() className?: string;
  @Input() inset?: boolean;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-separator',
  template: `
    <div [class]="cn('-mx-1 my-1 h-px bg-muted', className)">
    </div>
  `,
  standalone: true,
  imports: [RdxDropdownMenuSeparatorDirective]
})
export class DropdownMenuSeparatorComponent {
  @Input() className?: string;
  protected cn = cn;
}

@Component({
  selector: 'app-dropdown-menu-shortcut',
  template: `
    <span [class]="cn('ml-auto text-xs tracking-widest opacity-60', className)">
      <ng-content></ng-content>
    </span>
  `,
  standalone: true
})
export class DropdownMenuShortcutComponent {
  @Input() className?: string;
  protected cn = cn;
}

export {
  DropdownMenuComponent as DropdownMenu,
  DropdownMenuTriggerComponent as DropdownMenuTrigger,
  DropdownMenuContentComponent as DropdownMenuContent,
  DropdownMenuItemComponent as DropdownMenuItem,
  DropdownMenuCheckboxItemComponent as DropdownMenuCheckboxItem,
  DropdownMenuRadioItemComponent as DropdownMenuRadioItem,
  DropdownMenuLabelComponent as DropdownMenuLabel,
  DropdownMenuSeparatorComponent as DropdownMenuSeparator,
  DropdownMenuShortcutComponent as DropdownMenuShortcut,
  DropdownMenuGroupComponent as DropdownMenuGroup,
  // DropdownMenuPortalComponent as DropdownMenuPortal,
  DropdownMenuSubComponent as DropdownMenuSub,
  DropdownMenuSubContentComponent as DropdownMenuSubContent,
  DropdownMenuSubTriggerComponent as DropdownMenuSubTrigger,
  DropdownMenuRadioGroupComponent as DropdownMenuRadioGroup
};
