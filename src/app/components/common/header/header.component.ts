import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { GeneralService } from '../../../services/general.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent, LucideAngularModule],
  providers: [GeneralService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor(private generalService: GeneralService) {}

  get hasMain(): boolean {
    return this.generalService.hasMain();
  }
  ngOnInit(): void {}
}
