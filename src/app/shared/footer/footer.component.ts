import { Component, inject } from '@angular/core';
import { LucideAngularModule, Heart } from 'lucide-angular';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private langService = inject(LanguageService);

  readonly Heart = Heart;
  readonly year = new Date().getFullYear();
  readonly t = this.langService.t;
}
