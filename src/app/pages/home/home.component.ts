import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from '../../shared/about-me/about-me.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { TechnologiesComponent } from '../../shared/technologies/technologies.component';
import { WorkExperienceComponent } from '../../shared/work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent,
    WorkExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
