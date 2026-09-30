import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const THEME_COLOR: Record<Theme, string> = { light: '#f3f2ef', dark: '#141412' };

/**
 * Light/dark theme. The initial value is set on <html data-theme> by the inline
 * script in index.html (saved choice, else the OS preference) to avoid a flash.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.doc.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light');

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.doc.documentElement.dataset['theme'] = theme;
      this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }
}
