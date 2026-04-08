import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Rocket, Users } from 'lucide-angular';
import { Component, computed, inject, Input } from '@angular/core';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FadeInUpDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  private langService = inject(LanguageService);

  @Input({ required: false }) public aboutImageUrl: string = '/assets/avatar.jpg';

  readonly Code2 = Code2;
  readonly Rocket = Rocket;
  readonly Users = Users;

  readonly t = this.langService.t;

  readonly features = computed(() => {
    const texts = this.t().aboutMe.features;
    return [
      { icon: Code2, text: texts[0] },
      { icon: Rocket, text: texts[1] },
      { icon: Users, text: texts[2] },
    ];
  });
}
