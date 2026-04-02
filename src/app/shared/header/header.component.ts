import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2 } from 'lucide-angular';

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
  activeSection = 'home';
  isScrolled = false;

  readonly Code2 = Code2;

  readonly navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about-me' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Work', id: 'work-experience' },
    { label: 'Contact', id: 'contact' },
  ];

  private observer!: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
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

    this.navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(id: string): void {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
