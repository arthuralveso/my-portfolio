import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  /**
   * URL da imagem do avatar.
   * Por padrão, usa o arquivo `public/avatar.jpg`.
   */
  @Input({ required: false }) public avatarUrl: string = '/avatar.jpg';

  public readonly name = 'Arthur Alves';
  public readonly roleLeft = 'Frontend Developer';
  public readonly roleRight = 'Angular Specialist';
  public readonly description =
    'Building exceptional digital experiences with modern web technologies. Passionate about creating scalable, performant applications that make a difference.';

  public scrollToSection(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
