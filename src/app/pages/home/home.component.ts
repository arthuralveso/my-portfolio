import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';
import { AboutMeComponent } from '../../shared/about-me/about-me.component';
import { TechnologiesComponent } from '../../shared/technologies/technologies.component';
import { WorkExperienceComponent } from '../../shared/work-experience/work-experience.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutMeComponent, TechnologiesComponent, WorkExperienceComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
