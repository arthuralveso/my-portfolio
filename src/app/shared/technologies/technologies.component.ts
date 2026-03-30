import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Technology = {
  name: string;
  icon: string;
  bg: string;
  svgUrl?: string;
};

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  public readonly title = 'Technologies & Tools';
  public readonly subtitle = 'My core technical stack for building modern web applications';

  public readonly technologies: Technology[] = [
    { name: 'Angular', icon: 'devicon-angularjs-plain', bg: 'rgba(221, 0, 49, 0.15)' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', bg: 'rgba(49, 120, 198, 0.15)' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', bg: 'rgba(247, 223, 30, 0.12)' },
    { name: 'RxJS', icon: 'devicon-rxjs-plain', bg: 'rgba(204, 38, 213, 0.15)' },
    {
      name: 'NgRx',
      icon: '',
      svgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
      bg: 'rgba(186, 26, 101, 0.15)',
    },

    // { name: 'Node.js', icon: 'devicon-nodejs-plain', bg: 'rgba(60, 135, 58, 0.15)' },
    { name: 'HTML5', icon: 'devicon-html5-plain', bg: 'rgba(227, 76, 38, 0.15)' },
    { name: 'SCSS', icon: 'devicon-sass-original', svgUrl: '', bg: 'rgba(204, 102, 153, 0.15)' },
    { name: 'Git', icon: 'devicon-git-plain', bg: 'rgba(240, 80, 50, 0.15)' },
  ];

  public trackByName(_: number, tech: Technology) {
    return tech.name;
  }
}
