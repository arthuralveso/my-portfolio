import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, Linkedin, Github } from 'lucide-angular';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';
import { ContactInfo } from '../interfaces/contact.interface';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FadeInUpDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private langService = inject(LanguageService);

  readonly t = this.langService.t;

  readonly primaryContacts = computed<ContactInfo[]>(() => {
    const c = this.t().contact;
    return [
      {
        label: 'Email',
        value: 'athuralves91@gmail.com',
        href: 'mailto:athuralves91@gmail.com',
        icon: Mail,
        ariaLabel: c.emailAriaLabel,
      },
      {
        label: 'Phone',
        value: '+55 (83) 998126806',
        href: 'tel:+5583998126806',
        icon: Phone,
        ariaLabel: c.phoneAriaLabel,
      },
    ];
  });

  readonly socialContacts = computed<ContactInfo[]>(() => {
    const c = this.t().contact;
    return [
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/arthuralveso91',
        href: 'https://www.linkedin.com/in/arthuralveso91/',
        icon: Linkedin,
        ariaLabel: c.linkedinAriaLabel,
      },
      {
        label: 'GitHub',
        value: 'github.com/arthuralveso',
        href: 'https://github.com/arthuralveso',
        icon: Github,
        ariaLabel: c.githubAriaLabel,
      },
    ];
  });

  trackByLabel(_: number, contact: ContactInfo): string {
    return contact.label;
  }
}
