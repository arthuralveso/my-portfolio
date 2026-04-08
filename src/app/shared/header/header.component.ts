import { Component, computed, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Menu, X } from 'lucide-angular';
import { LanguageService } from '../services/language.service';

interface NavItem {
  label: string;
  id: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private langService = inject(LanguageService);

  activeSection = 'home';
  isScrolled = false;
  menuOpen = false;

  readonly Code2 = Code2;
  readonly Menu = Menu;
  readonly X = X;

  readonly lang = this.langService.current;
  readonly t = this.langService.t;

  readonly navItems = computed<NavItem[]>(() => {
    const nav = this.t().nav;
    return [
      { label: nav.home, id: 'home' },
      { label: nav.aboutMe, id: 'about-me' },
      { label: nav.technologies, id: 'technologies' },
      { label: nav.work, id: 'work-experience' },
      { label: nav.contact, id: 'contact' },
    ];
  });

  private observer!: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
    if (this.menuOpen) this.menuOpen = false;
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 },
    );

    const ids = ['home', 'about-me', 'technologies', 'work-experience', 'contact'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleLang(): void {
    this.langService.toggle();
  }

  scrollTo(id: string): void {
    this.menuOpen = false;
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
