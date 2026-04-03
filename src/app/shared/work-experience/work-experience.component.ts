import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../interfaces/work-experience.interface';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  readonly title = signal('Work Experience');

  readonly experiences = signal<Experience[]>([
    {
      role: 'Senior Frontend Engineer',
      company: 'Beyond Soluções',
      duration: 'Aug 2024 – Present',
      location: 'Remote, BR',
      type: 'Full-time',
      current: true,
      responsibilities: [
        "Led development of 2 integrated Angular 18 applications for BTG Pactual's investment platform, automating 100% of portfolio management for ~370 financial advisors using Signals, Standalone Components, and NgRx",
        'Migrated legacy AngularJS system to Angular 18 micro frontend architecture, improving page load time by 30% and reducing maintenance overhead by 45%',
        "Contributed to Orquestra (BTG Pactual's proprietary Design System), defining visual language, accessibility standards and reusable component guidelines",
        'Documented 16 components in Storybook with usage guidelines and interactive examples, ensuring consistent adoption across 5 engineering squads',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'ACT Digital',
      duration: 'Aug 2021 – Aug 2024',
      location: 'Remote, BR',
      type: 'Full-time',
      responsibilities: [
        'Built payment integration module for BTG Pactual advisor platform using Angular and RxJS, replacing email workflow and reducing payment processing time by 60%',
        'Created a custody transfer application with Angular Reactive Forms and RxJS, reducing processing time by 40% for thousands of monthly transactions',
        'Ensured WCAG 2.1 accessibility compliance applying semantic HTML and ARIA roles throughout the component architecture',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Unifacisa University – IT Lab',
      duration: 'Apr 2021 – Aug 2021',
      location: 'Campina Grande, BR',
      type: 'Full-time',
      responsibilities: [
        "Built 4 Angular modules for Unifacisa's ERP system serving 30 internal users across HR, Marketing, and Finance departments",
        'Created meeting management module with Angular and RxJS, achieving 100% adoption by 65 employees and reducing scheduling time by 70%',
      ],
    },
    {
      role: 'Backend Developer',
      company: 'Dock',
      duration: 'Dec 2020 – Mar 2021',
      location: 'Remote, BR',
      type: 'Full-time',
      responsibilities: [
        'Fixed critical billing bug in Java 8 service processing hundreds of invoices monthly, improving query performance by 60% and eliminating all errors through SQL optimization',
      ],
    },
    {
      role: 'Full-Stack Software Developer',
      company: 'Brisanet Telecomunicações',
      duration: 'Jun 2020 – Mar 2021',
      location: 'Campina Grande, BR',
      type: 'Full-time',
      responsibilities: [
        'Developed features for customer platform and partner management tool using React, Redux, Node.js, and PostgreSQL, supporting expansion to 2 new markets',
        'Created React + TypeScript module for partner branch operational rules, improving internal control workflows and supporting 30% service adoption increase',
      ],
    },
  ]);

  trackByCompany(_: number, exp: Experience): string {
    return exp.company;
  }
}
