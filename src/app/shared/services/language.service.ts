import { inject, Injectable, signal, computed } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Lang = 'en' | 'pt';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      aboutMe: 'About Me',
      technologies: 'Technologies',
      work: 'Work',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      rolePrimary: 'Senior Frontend Engineer',
      roleSecondary: '& Angular Specialist',
      description:
        'Building exceptional digital experiences with modern web technologies. Passionate about creating scalable, performant applications that make a difference.',
      viewWork: 'View Work',
      contactMe: 'Contact Me',
      resume: 'Resume',
    },
    aboutMe: {
      title: 'About Me',
      lead1: `Senior Frontend Engineer with 5+ years specializing in Angular for high-scale financial platforms. Led Angular 18 migrations and micro frontend architectures at one of Latin America's largest investment banks.`,
      lead2: `Specialist in modern Angular (Signals, Standalone Components), RxJS, NgRx, and WCAG-compliant accessibility. Proven track record delivering performance optimizations and design system contributions in banking ecosystems.`,
      features: [
        'Expert in Angular (2–20), Signals, Standalone Components and micro frontends',
        'Led Angular 18 migrations across high-scale financial platforms, cutting load time by 30% and maintenance overhead by 45%',
        'WCAG 2.1 accessibility advocate, ensuring inclusive UI across all delivered products',
      ],
      metrics: {
        years: 'Years of experience',
        projects: 'Projects delivered',
        loadTime: 'Load time reduction',
        openSource: 'Open-source components',
      },
    },
    technologies: {
      title: 'Technologies & Tools',
      subtitle: 'My core technical stack for building modern web applications',
    },
    workExperience: {
      title: 'Work Experience',
      current: 'Current',
      experiences: [
        {
          role: 'Senior Frontend Engineer',
          company: 'Beyond Soluções',
          duration: 'Aug 2024 – Present',
          location: 'Remote, BR',
          type: 'Full-time',
          current: true,
          responsibilities: [
            "Led development of 2 integrated Angular 18 applications for BTG Pactual's investment platform, automating 100% of portfolio management for ~370 financial advisors using Signals, Standalone Components, and NgRx",
            'Migrated legacy AngularJS system to Angular 18 micro frontend architecture, improving page load time by 30% and reducing maintenance overhead by 45%',
            "Contributed to Orquestra (BTG Pactual's proprietary Design System), defining visual language, accessibility standards and reusable component guidelines",
            'Documented 16 components in Storybook with usage guidelines and interactive examples, ensuring consistent adoption across 5 engineering squads',
          ],
        },
        {
          role: 'Frontend Engineer',
          company: 'ACT Digital',
          duration: 'Aug 2021 – Aug 2024',
          location: 'Remote, BR',
          type: 'Full-time',
          current: false,
          responsibilities: [
            'Built payment integration module for BTG Pactual advisor platform using Angular and RxJS, replacing email workflow and reducing payment processing time by 60%',
            'Created a custody transfer application with Angular Reactive Forms and RxJS, reducing processing time by 40% for thousands of monthly transactions',
            'Ensured WCAG 2.1 accessibility compliance applying semantic HTML and ARIA roles throughout the component architecture',
          ],
        },
        {
          role: 'Frontend Engineer',
          company: 'Unifacisa University – IT Lab',
          duration: 'Apr 2021 – Aug 2021',
          location: 'Campina Grande, BR',
          type: 'Full-time',
          current: false,
          responsibilities: [
            "Built 4 Angular modules for Unifacisa's ERP system serving 30 internal users across HR, Marketing, and Finance departments",
            'Created meeting management module with Angular and RxJS, achieving 100% adoption by 65 employees and reducing scheduling time by 70%',
          ],
        },
        {
          role: 'Backend Developer',
          company: 'Dock',
          duration: 'Dec 2020 – Mar 2021',
          location: 'Remote, BR',
          type: 'Full-time',
          current: false,
          responsibilities: [
            'Fixed critical billing bug in Java 8 service processing hundreds of invoices monthly, improving query performance by 60% and eliminating all errors through SQL optimization',
          ],
        },
        {
          role: 'Full-Stack Software Developer',
          company: 'Brisanet Telecomunicações',
          duration: 'Jun 2020 – Mar 2021',
          location: 'Campina Grande, BR',
          type: 'Full-time',
          current: false,
          responsibilities: [
            'Developed features for customer platform and partner management tool using React, Redux, Node.js, and PostgreSQL, supporting expansion to 2 new markets',
            'Created React + TypeScript module for partner branch operational rules, improving internal control workflows and supporting 30% service adoption increase',
          ],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
      emailAriaLabel: 'Send email to Arthur',
      phoneAriaLabel: 'Call Arthur',
      linkedinAriaLabel: "Visit Arthur's LinkedIn profile (opens in new tab)",
      githubAriaLabel: "Visit Arthur's GitHub profile (opens in new tab)",
    },
    footer: {
      designed: 'Designed and coded with Angular and passion by',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      aboutMe: 'Sobre mim',
      technologies: 'Tecnologias',
      work: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, me chamo',
      rolePrimary: 'Senior Frontend Engineer',
      roleSecondary: '& Especialista Angular',
      description:
        'Construindo experiências digitais excepcionais com tecnologias web modernas. Apaixonado por criar aplicações escaláveis e performáticas que fazem a diferença.',
      viewWork: 'Ver Trabalhos',
      contactMe: 'Entrar em Contato',
      resume: 'Currículo',
    },
    aboutMe: {
      title: 'Sobre mim',
      lead1: `Senior Frontend Engineer com mais de 5 anos especializando em Angular para plataformas financeiras de alto volume. Liderou migrações para Angular 18 e arquiteturas micro frontend em um dos maiores bancos de investimento da América Latina.`,
      lead2: `Especialista em Angular moderno (Signals, Standalone Components), RxJS, NgRx e acessibilidade WCAG. Histórico comprovado de otimizações de performance e contribuições em design systems em ecossistemas bancários.`,
      features: [
        'Expert em Angular (2–20), Signals, Standalone Components e micro frontends',
        'Liderou migrações para Angular 18 em plataformas financeiras de alto volume, reduzindo o tempo de carregamento em 30% e o overhead de manutenção em 45%',
        'Defensor da acessibilidade WCAG 2.1, garantindo interfaces inclusivas em todos os produtos entregues',
      ],
      metrics: {
        years: 'Anos de experiência',
        projects: 'Projetos entregues',
        loadTime: 'Redução de load time',
        openSource: 'Componentes open-source',
      },
    },
    technologies: {
      title: 'Tecnologias & Ferramentas',
      subtitle: 'Meu stack técnico principal para construir aplicações web modernas',
    },
    workExperience: {
      title: 'Experiência Profissional',
      current: 'Atual',
      experiences: [
        {
          role: 'Senior Frontend Engineer',
          company: 'Beyond Soluções',
          duration: 'Ago 2024 – Presente',
          location: 'Remoto, BR',
          type: 'CLT',
          current: true,
          responsibilities: [
            'Liderou o desenvolvimento de 2 aplicações Angular 18 integradas para a plataforma de investimentos do BTG Pactual, automatizando 100% da gestão de portfólios para aproximadamente 370 assessores financeiros usando Signals, Standalone Components e NgRx',
            'Migrou sistema legado AngularJS para arquitetura micro frontend em Angular 18, melhorando o tempo de carregamento em 30% e reduzindo o overhead de manutenção em 45%',
            'Contribuiu para o construção do Design System proprietário do BTG Pactual, definindo linguagem visual, padrões de acessibilidade e diretrizes de componentes reutilizáveis',
            'Documentou 16 componentes no Storybook com guias de uso e exemplos interativos, garantindo adoção consistente em 5 squads de engenharia',
          ],
        },
        {
          role: 'Frontend Engineer',
          company: 'ACT Digital',
          duration: 'Ago 2021 – Ago 2024',
          location: 'Remoto, BR',
          type: 'CLT',
          current: false,
          responsibilities: [
            'Construiu módulo de integração de pagamentos para a plataforma de assessores do BTG Pactual com Angular e RxJS, substituindo fluxo por e-mail e reduzindo o tempo de processamento em 60%',
            'Criou aplicação de transferência de custódia com Angular Reactive Forms e RxJS, reduzindo o tempo de processamento em 40% para milhares de transações mensais',
            'Garantiu conformidade com acessibilidade WCAG 2.1 aplicando HTML semântico e roles ARIA em toda a arquitetura de componentes',
          ],
        },
        {
          role: 'Frontend Engineer',
          company: 'Unifacisa University – IT Lab',
          duration: 'Abr 2021 – Ago 2021',
          location: 'Campina Grande, BR',
          type: 'CLT',
          current: false,
          responsibilities: [
            'Desenvolveu 4 módulos Angular para o sistema ERP da Unifacisa, atendendo 30 usuários internos nos departamentos de RH, Marketing e Financeiro',
            'Criou módulo de gestão de reuniões com Angular e RxJS, atingindo 100% de adoção por 65 colaboradores e reduzindo o tempo de agendamento em 70%',
          ],
        },
        {
          role: 'Backend Developer',
          company: 'Dock',
          duration: 'Dez 2020 – Mar 2021',
          location: 'Remoto, BR',
          type: 'CLT',
          current: false,
          responsibilities: [
            'Corrigiu bug crítico de faturamento em serviço Java 8 que processava centenas de faturas mensalmente, melhorando a performance de consultas em 60% e eliminando todos os erros via otimização de SQL',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Brisanet Telecomunicações',
          duration: 'Jun 2020 – Mar 2021',
          location: 'Campina Grande, BR',
          type: 'CLT',
          current: false,
          responsibilities: [
            'Desenvolveu funcionalidades para plataforma de clientes e ferramenta de gestão de parceiros com React, Redux, Node.js e PostgreSQL, suportando expansão para 2 novos mercados',
            'Criou módulo React + TypeScript para regras operacionais de filiais de parceiros, melhorando fluxos de controle interno e suportando aumento de 30% na adoção do serviço',
          ],
        },
      ],
    },
    contact: {
      title: 'Entre em contato',
      subtitle:
        'E agora? Sinta-se à vontade para entrar em contato se estiver procurando um desenvolvedor, tiver alguma dúvida ou simplesmente quiser se conectar.',
      emailAriaLabel: 'Enviar e-mail para Arthur',
      phoneAriaLabel: 'Ligar para Arthur',
      linkedinAriaLabel: 'Visitar o perfil do Arthur no LinkedIn (abre em nova aba)',
      githubAriaLabel: 'Visitar o perfil do Arthur no GitHub (abre em nova aba)',
    },
    footer: {
      designed: 'Desenhado e construido com Angular e entusiasmo por',
    },
  },
} as const;

export type Translations = typeof TRANSLATIONS.en;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private document = inject(DOCUMENT);

  readonly current = signal<Lang>('en');

  readonly t = computed(() => TRANSLATIONS[this.current()]);

  toggle(): void {
    this.current.update((lang) => (lang === 'en' ? 'pt' : 'en'));
    // Sync lang attribute on <html> for WCAG 3.1.1 (Language of Page)
    this.document.documentElement.lang = this.current();
  }
}
