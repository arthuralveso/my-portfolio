import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';
import { AboutMeComponent } from '../../shared/about-me/about-me.component';
import { TechnologiesComponent } from '../../shared/technologies/technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutMeComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
