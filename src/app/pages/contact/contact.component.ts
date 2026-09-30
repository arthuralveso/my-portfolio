import { Component, inject, signal } from '@angular/core';
import { ArrowUpRight, Check, Copy, Download, LucideAngularModule } from 'lucide-angular';

import { PROFILE, UI } from '../../shared/data/content.data';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly ui = UI;
  protected readonly p = PROFILE;
  protected readonly copied = signal(false);
  protected readonly icons = { ArrowUpRight, Check, Copy, Download };

  protected readonly line1 = 'Let’s';
  protected readonly line2 = 'talk.';
  protected readonly phoneLabel = 'Phone';
  protected readonly lede =
    'I am looking for remote roles with teams abroad, as an employee or as a contractor. Tell me what you are building.';

  protected async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.p.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }
}
