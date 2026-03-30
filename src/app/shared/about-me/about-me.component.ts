import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Rocket, Users } from 'lucide-angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  @Input({ required: false }) public aboutImageUrl: string = '/about-me.jpg';
  title = 'About Me';

  readonly Code2 = Code2;
  readonly Rocket = Rocket;
  readonly Users = Users;

  features = [
    { icon: Code2, text: '5+ years of frontend development experience' },
    { icon: Rocket, text: 'Focus on Angular, TypeScript, and modern web architecture' },
    { icon: Users, text: 'Passionate about clean code and user-centric design' },
  ];

  lead1 = `I'm a frontend developer with a deep passion for building robust and
    scalable web applications. With over 5 years of experience specializing in
    Angular, I've had the privilege of working on diverse projects ranging from
    enterprise solutions to innovative startups.`;

  lead2 = `My approach combines technical expertise with a keen eye for design,
    ensuring that every application I build is not only performant but also
    delivers an exceptional user experience.`;
}
