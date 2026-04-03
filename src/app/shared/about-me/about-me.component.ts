import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Rocket, Users } from 'lucide-angular';
import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';

interface Metric {
  value: string;
  label: string;
  colorClass: 'c1' | 'c2' | 'c3' | 'c4';
  svgContent: SafeHtml;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FadeInUpDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  private sanitizer = inject(DomSanitizer);

  title = 'About Me';

  readonly Code2 = Code2;
  readonly Rocket = Rocket;
  readonly Users = Users;

  readonly metrics: Metric[] = [
    {
      value: '5+',
      label: 'Anos de experiência',
      colorClass: 'c1',
      svgContent: this.sanitizer.bypassSecurityTrustHtml('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    },
    {
      value: '30+',
      label: 'Projetos entregues',
      colorClass: 'c2',
      svgContent: this.sanitizer.bypassSecurityTrustHtml('<rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>'),
    },
    {
      value: '−30%',
      label: 'Redução de load time',
      colorClass: 'c3',
      svgContent: this.sanitizer.bypassSecurityTrustHtml('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
    },
    {
      value: '10+',
      label: 'Componentes open-source',
      colorClass: 'c4',
      svgContent: this.sanitizer.bypassSecurityTrustHtml('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
    },
  ];

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
