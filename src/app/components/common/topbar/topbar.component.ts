import { Component } from '@angular/core';
import { LucideAngularModule, Minimize, Maximize } from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  isMaximized = false;
  icons = { Minimize, Maximize };

  handleToggle = () => {
    this.isMaximized = !this.isMaximized;
    (window as any).Main.Maximize();
  };

  handleMinimize = () => (window as any).Main.Minimize();

  handleClose = () => (window as any).Main.Close();
}
