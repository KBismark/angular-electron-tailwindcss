import { Component, ElementRef, Input, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import {
  RdxDialogCloseDirective,
  RdxDialogContentDirective,
  RdxDialogDescriptionDirective,
  RdxDialogTitleDirective,
  RdxDialogTriggerDirective
} from '@radix-ng/primitives/dialog';
import { LucideAngularModule, X } from 'lucide-angular';
import { cn } from '../../../lib/utils';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [X, LucideAngularModule, RdxDialogTriggerDirective],
})
export class DialogComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Input() className?: string;

  @ViewChild('dialogContent') dialogContent!: ElementRef<HTMLDivElement>;
  @ViewChild('dialogOverlay') dialogOverlay!: ElementRef<HTMLDivElement>;

  protected cn = cn;

  onClose() {
    this.open = false;
    this.openChange.emit(false);
  }
}

@Component({
  selector: 'app-dialog-trigger',
  template: '<ng-content></ng-content>',
  standalone: true,
  imports: [RdxDialogTriggerDirective]
})
export class DialogTriggerComponent {
  @Output() onClick = new EventEmitter<void>();
}

@Component({
  selector: 'app-dialog-content',
  template: `
    <div
      #dialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      [class.hidden]="!open"
    ></div>
    <div
      #dialogContent
      class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
      [class]="cn(className)"
      [class.hidden]="!open"
    >
      <ng-content></ng-content>
      <button
        (click)="onClose()"
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <lucide-x class="h-4 w-4"></lucide-x>
        <span class="sr-only">Close</span>
      </button>
    </div>
  `,
  standalone: true,
  imports: [X, LucideAngularModule, RdxDialogContentDirective, RdxDialogCloseDirective]
})
export class DialogContentComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @Input() className?: string;

  protected cn = cn;

  onClose() {
    this.open = false;
    this.openChange.emit(false);
  }
}

@Component({
  selector: 'app-dialog-header',
  template: `
    <div [class]="cn('flex flex-col space-y-1.5 text-center sm:text-left', className)">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true
})
export class DialogHeaderComponent {
  @Input() className?: string;
  protected cn = cn;
}

@Component({
  selector: 'app-dialog-footer',
  template: `
    <div [class]="cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)">
      <ng-content></ng-content>
    </div>
  `,
  standalone: true
})
export class DialogFooterComponent {
  @Input() className?: string;
  protected cn = cn;
}

@Component({
  selector: 'app-dialog-title',
  template: `
    <h2 [class]="cn('text-lg font-semibold leading-none tracking-tight', className)">
      <ng-content></ng-content>
    </h2>
  `,
  standalone: true,
  imports: [RdxDialogTitleDirective]
})
export class DialogTitleComponent {
  @Input() className?: string;
  protected cn = cn;
}

@Component({
  selector: 'app-dialog-description',
  template: `
    <p [class]="cn('text-sm text-muted-foreground', className)">
      <ng-content></ng-content>
    </p>
  `,
  standalone: true,
  imports: [RdxDialogDescriptionDirective]
})
export class DialogDescriptionComponent {
  @Input() className?: string;
  protected cn = cn;
}

export {
  DialogComponent as Dialog,
  DialogTriggerComponent as DialogTrigger,
  DialogContentComponent as DialogContent,
  DialogHeaderComponent as DialogHeader,
  DialogFooterComponent as DialogFooter,
  DialogTitleComponent as DialogTitle,
  DialogDescriptionComponent as DialogDescription
};
