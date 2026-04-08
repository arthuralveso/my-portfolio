import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';
import { LanguageService } from '../services/language.service';
import { Experience } from '../interfaces/work-experience.interface';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  private langService = inject(LanguageService);

  readonly t = this.langService.t;
  readonly experiences = computed<Experience[]>(
    () => this.t().workExperience.experiences as unknown as Experience[],
  );

  trackByCompany(_: number, exp: Experience): string {
    return exp.company;
  }
}
