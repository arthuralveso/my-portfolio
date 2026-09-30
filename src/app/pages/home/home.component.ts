import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, ArrowUpRight, LucideAngularModule } from 'lucide-angular';

import { HOME } from '../../shared/data/content.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly c = HOME;
  protected readonly icons = { ArrowRight, ArrowUpRight };
  protected readonly clock = signal(this.now());

  constructor() {
    const id = setInterval(() => this.clock.set(this.now()), 20_000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  private now(): string {
    const time = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Fortaleza',
    }).format(new Date());
    return `${time} · GMT-3`;
  }
}
