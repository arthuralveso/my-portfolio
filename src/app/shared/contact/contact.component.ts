import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, Linkedin, Github } from 'lucide-angular';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';
import { ContactInfo } from '../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FadeInUpDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly title = signal('Get In Touch');
  readonly subtitle = signal(
    "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
  );

  readonly primaryContacts = signal<ContactInfo[]>([
    {
      label: 'Email',
      value: 'athuralves91@gmail.com',
      href: 'mailto:athuralves91@gmail.com',
      icon: Mail,
      ariaLabel: 'Send email to Arthur',
    },
    {
      label: 'Phone',
      value: '+55 (83) 998126806',
      href: 'tel:+5583998126806',
      icon: Phone,
      ariaLabel: 'Call Arthur',
    },
  ]);

  readonly socialContacts = signal<ContactInfo[]>([
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/arthuralveso91',
      href: 'https://www.linkedin.com/in/arthuralveso91/',
      icon: Linkedin,
      ariaLabel: "Visit Arthur's LinkedIn profile",
    },
    {
      label: 'GitHub',
      value: 'github.com/arthuralveso',
      href: 'https://github.com/arthuralveso',
      icon: Github,
      ariaLabel: "Visit Arthur's GitHub profile",
    },
  ]);

  trackByLabel(_: number, contact: ContactInfo): string {
    return contact.label;
  }
}
