import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Rocket, Users } from 'lucide-angular';
import { Component, Input } from '@angular/core';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FadeInUpDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  @Input({ required: false }) public aboutImageUrl: string = '/about-me.jpg';
  title = 'About Me';

  readonly Code2 = Code2;
  readonly Rocket = Rocket;
  readonly Users = Users;

  features = [
    {
      icon: Code2,
      text: 'Expert in Angular (2–20), Signals, Standalone Components and micro frontends',
    },
    {
      icon: Rocket,
      text: 'Led Angular 18 migrations across high-scale financial platforms, cutting load time by 30% and maintenance overhead by 45%',
    },
    {
      icon: Users,
      text: 'WCAG 2.1 accessibility advocate, ensuring inclusive UI across all delivered products',
    },
  ];

  lead1 = `Senior Frontend Engineer with 5+ years specializing in Angular for high-scale financial platforms.
    Led Angular 18 migrations and micro frontend architectures at at one of
Latin America's largest investment banks.`;

  lead2 = `Specialist in modern Angular (Signals, Standalone Components), RxJS, NgRx, and WCAG-compliant accessibility.
    Proven track record delivering performance optimizations and design system contributions in banking ecosystems.`;
}
