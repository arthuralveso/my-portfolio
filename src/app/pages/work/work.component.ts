import { Component } from '@angular/core';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

import { CASES, JOBS } from '../../shared/data/content.data';

@Component({
  selector: 'app-work',
  imports: [LucideAngularModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  protected readonly cases = CASES;
  protected readonly jobs = JOBS;
  protected readonly ArrowRight = ArrowRight;
  protected readonly heading = 'Work';
  protected readonly expHeading = 'Experience';
  protected readonly lede =
    'A selection of systems in production at Itaú and BTG Pactual, and the numbers they moved.';
}
