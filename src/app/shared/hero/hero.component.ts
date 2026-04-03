import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FadeInUpDirective } from '../directives/fade-in-up.directive';
import { LucideAngularModule, ArrowRight, Mail } from 'lucide-angular';

type TokenClass =
  | 'kw' // keywords: export, class, true
  | 'dec' // declarations: class name, decorator
  | 'nm' // names: signal, computed, input
  | 'str' // strings
  | 'pu' // punctuation / default
  | 'cm'; // comments

type Token = [TokenClass, string] | string;
type CodeLine = Token[];

const CODE_LINES: CodeLine[] = [
  [
    ['dec', '@Component'],
    ['pu', '({ '],
    ['nm', 'standalone'],
    ['pu', ': '],
    ['kw', 'true'],
    ['pu', ' })'],
  ],
  [
    ['kw', 'export class '],
    ['dec', 'ArthurAlvesPortfolioComponent'],
    ['pu', ' {'],
  ],
  [['cm', '  // 5+ years shaping Angular at scale']],
  [
    ['nm', '  stack'],
    ['pu', '  = '],
    ['nm', 'signal'],
    ['pu', '(['],
    ['str', "'Angular'"],
    ['pu', ', '],
    ['str', "'RxJS'"],
    ['pu', ', '],
    ['str', "'NgRx'"],
    ['pu', '])'],
  ],
  [
    ['nm', '  focus'],
    ['pu', '  = '],
    ['nm', 'signal'],
    ['pu', '('],
    ['str', "'fintech · a11y · performance'"],
    ['pu', ')'],
  ],
  [
    ['nm', '  wcag'],
    ['pu', '   = '],
    ['nm', 'signal'],
    ['pu', '('],
    ['str', "'2.1 compliant'"],
    ['pu', ')'],
  ],
  [['pu', '']],
  [['cm', '  // derived state — no extra subscriptions']],
  [
    ['nm', '  profile'],
    ['pu', ' = '],
    ['nm', 'computed'],
    ['pu', '(() => ({'],
  ],
  [
    ['str', '    name'],
    ['pu', ':  '],
    ['str', "'Arthur Alves'"],
    ['pu', ','],
  ],
  [
    ['str', '    role'],
    ['pu', ':  '],
    ['str', "'Senior Frontend Engineer'"],
    ['pu', ','],
  ],
  [
    ['str', '    open'],
    ['pu', ':  '],
    ['kw', 'true'],
  ],
  [['pu', '  }))']],
  [['pu', '}']],
];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('codeBlock', { static: false }) codeBlock!: ElementRef<HTMLDivElement>;

  scrollHintOpacity = 1;

  readonly ArrowRight = ArrowRight;
  readonly Mail = Mail;

  public readonly name = 'Arthur Alves';
  public readonly description =
    'Building exceptional digital experiences with modern web technologies. Passionate about creating scalable, performant applications that make a difference.';

  private lineIndex = 0;
  private charIndex = 0;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  @HostListener('window:scroll')
  onScroll(): void {
    const threshold = 200;
    this.scrollHintOpacity = Math.max(0, 1 - window.scrollY / threshold);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.type(), 400);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  public scrollToSection(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private escHtml(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  private tokenHTML(tok: Token): string {
    if (Array.isArray(tok)) return `<span class="${tok[0]}">${this.escHtml(tok[1])}</span>`;
    return `<span class="pu">${this.escHtml(tok)}</span>`;
  }

  private buildLine(tokens: CodeLine): string {
    return tokens.map((t) => this.tokenHTML(t)).join('');
  }

  private plainText(tokens: CodeLine): string {
    return tokens.map((t) => (Array.isArray(t) ? t[1] : t)).join('');
  }

  private render(): void {
    const el = this.codeBlock?.nativeElement;
    if (!el) return;

    el.innerHTML = '';

    // Render completed lines
    CODE_LINES.slice(0, this.lineIndex).forEach((tokens, i) => {
      const div = document.createElement('div');
      div.className = 'snippet-line';
      div.innerHTML = `<span class="snippet-ln">${i + 1}</span><span>${this.buildLine(tokens)}</span>`;
      el.appendChild(div);
    });

    // Render current line being typed
    if (this.lineIndex < CODE_LINES.length) {
      const curTokens = CODE_LINES[this.lineIndex];
      const plain = this.plainText(curTokens);
      const partial = plain.slice(0, this.charIndex);

      let html = '';
      let rem = partial;
      for (const tok of curTokens) {
        const txt = Array.isArray(tok) ? tok[1] : tok;
        const cls = Array.isArray(tok) ? tok[0] : 'pu';
        if (rem.length <= 0) break;
        if (rem.length >= txt.length) {
          html += `<span class="${cls}">${this.escHtml(txt)}</span>`;
          rem = rem.slice(txt.length);
        } else {
          html += `<span class="${cls}">${this.escHtml(rem)}</span>`;
          rem = '';
        }
      }

      const cur = document.createElement('div');
      cur.className = 'snippet-line';
      cur.innerHTML = `<span class="snippet-ln">${this.lineIndex + 1}</span><span>${html}<span class="snippet-cursor"></span></span>`;
      el.appendChild(cur);
    } else {
      // All done — cursor on last line
      const last = el.lastElementChild;
      if (last) {
        const span = last.querySelector('span:last-child');
        if (span) span.innerHTML += '<span class="snippet-cursor"></span>';
      }
    }
  }

  private type(): void {
    if (this.lineIndex >= CODE_LINES.length) {
      this.render();
      return;
    }

    const curTokens = CODE_LINES[this.lineIndex];
    const plain = this.plainText(curTokens);

    this.render();

    this.charIndex++;

    if (this.charIndex > plain.length) {
      this.lineIndex++;
      this.charIndex = 0;
      const isComment = Array.isArray(curTokens[0]) && curTokens[0][0] === 'cm';
      this.timeoutId = setTimeout(
        () => this.type(),
        isComment ? 120 : plain.trim() === '' ? 60 : 55,
      );
    } else {
      const ch = plain[this.charIndex - 1];
      const delay = ch === ' ' ? 16 : ch === "'" ? 38 : 28;
      this.timeoutId = setTimeout(() => this.type(), delay);
    }
  }
}
