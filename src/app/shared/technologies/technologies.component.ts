import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';

type Technology = {
  name: string;
  icon: string;
  bg: string;
  svgUrl?: string;
};

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  public readonly title = 'Technologies & Tools';
  public readonly subtitle = 'My core technical stack for building modern web applications';

  public readonly technologies: Technology[] = [
    { name: 'TypeScript', icon: 'devicon-typescript-plain', bg: 'rgba(49, 120, 198, 0.15)' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', bg: 'rgba(247, 223, 30, 0.12)' },
    {
      name: 'Angular',
      icon: '',
      svgUrl:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      bg: 'rgba(221, 0, 49, 0.15)',
    },
    { name: 'RxJS', icon: 'devicon-rxjs-plain', bg: 'rgba(204, 38, 213, 0.15)' },
    {
      name: 'NgRx',
      icon: '',
      svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
      bg: 'rgba(186, 26, 101, 0.15)',
    },
    { name: 'Jasmine', icon: 'devicon-jasmine-plain', bg: 'rgba(143, 56, 168, 0.15)' },
    { name: 'Jest', icon: 'devicon-jest-plain', bg: 'rgba(192, 47, 47, 0.15)' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', bg: 'rgba(6, 182, 212, 0.15)' },
    { name: 'Figma', icon: 'devicon-figma-plain', bg: 'rgba(242, 78, 30, 0.15)' },
    { name: 'Git', icon: 'devicon-git-plain', bg: 'rgba(240, 80, 50, 0.15)' },
    {
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain-wordmark',
      bg: 'rgba(255, 153, 0, 0.15)',
    },
    {
      name: 'CI/CD',
      icon: 'devicon-githubactions-plain',
      bg: 'rgba(31, 136, 61, 0.15)',
    },
  ];

  public trackByName(_: number, tech: Technology) {
    return tech.name;
  }
}
