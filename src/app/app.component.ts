import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [GeneralService]

})
export class AppComponent implements OnInit, OnDestroy {
  timeout?: ReturnType<typeof setTimeout>;

  constructor(private generalService: GeneralService){}

  ngOnInit(): void {
    // Setup appliccation and remove loading screen
    this.timeout = setTimeout(() => {
      if (this.generalService.hasMain()){
        (window as any).Main.removeLoading();
      }
    }, 2000);
  }

  get hasMain(): boolean {
    return this.generalService.hasMain();
  }
  ngOnDestroy(): void {
    // Cleanup application
    clearTimeout(this.timeout);
  }
}
