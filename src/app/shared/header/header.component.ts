import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ArrowDown, ArrowUpRight, LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { filter } from 'rxjs';

import { NAV, PROFILE, UI } from '../data/content.data';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly nav = NAV;
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly icons = { ArrowDown, ArrowUpRight, Moon, Sun };
  protected readonly theme = inject(ThemeService);

  protected readonly open = signal(false);

  constructor() {
    inject(Router).events
      .pipe(filter(e => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.open.set(false));

    effect(() => document.body.classList.toggle('no-scroll', this.open()));
  }

  protected toggle(): void { this.open.update(v => !v); }
  protected close(): void { this.open.set(false); }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.close(); }
}
