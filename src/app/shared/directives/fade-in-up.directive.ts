import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[fadeInUp]',
  standalone: true,
})
export class FadeInUpDirective implements OnInit, OnDestroy {
  /** Delay in milliseconds before the animation starts (for stagger effects) */
  @Input() delay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    this.renderer.addClass(element, 'fade-in-up-init');

    if (this.delay) {
      this.renderer.setStyle(element, 'transition-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'fade-in-up-visible');
            this.observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
