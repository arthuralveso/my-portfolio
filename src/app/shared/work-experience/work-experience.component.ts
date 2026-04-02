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
      role: 'Senior Frontend Developer',
      company: 'Accenture',
      duration: 'Jan 2022 – Present',
      location: 'Remote',
      type: 'Full-time',
      current: true,
      responsibilities: [
        'Led development of large-scale Angular applications serving 100k+ users',
        'Architected micro-frontend solutions reducing time-to-deploy by 40%',
        'Defined frontend standards and conducted code reviews across squads',
        'Collaborated closely with UX/design teams to deliver pixel-perfect interfaces',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'CI&T',
      duration: 'Mar 2020 – Dec 2021',
      location: 'São Paulo, BR',
      type: 'Full-time',
      responsibilities: [
        'Built and maintained Angular SPAs for enterprise clients',
        'Integrated RESTful APIs and GraphQL endpoints into scalable frontend layers',
        'Improved performance metrics (LCP, CLS, FID) across critical user journeys',
        'Participated in agile ceremonies and contributed to backlog refinement',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Freelance',
      duration: 'Jun 2018 – Feb 2020',
      location: 'Remote',
      type: 'Contract',
      responsibilities: [
        'Delivered responsive web applications for clients across multiple industries',
        'Built component libraries with Angular and reusable design systems',
        'Worked directly with stakeholders to gather requirements and iterate on designs',
      ],
    },
  ]);

  trackByCompany(_: number, exp: Experience): string {
    return exp.company;
  }
}
