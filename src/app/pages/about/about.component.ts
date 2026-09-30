import { Component } from '@angular/core';

import { STACK } from '../../shared/data/content.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly stack = STACK;
  protected readonly heading = 'About';
  protected readonly stackHeading = 'Toolbox';

  protected readonly statement =
    'I build the front of banking-scale systems, and I am comfortable building the back that feeds them.';
  protected readonly p1 =
    'Six years of Angular, from AngularJS to v20. I have migrated legacy systems to micro frontends, contributed to design systems and built accessible interfaces for financial platforms used by thousands of people.';
  protected readonly p2 =
    'At Itaú I built the login system for the PJ client platform, which handles around 1.17 million authentications a day, including its Java Spring Boot BFF and part of the infrastructure it runs on. I like owning a feature from the screen down to the pipeline.';

  protected readonly facts = [
    { k: 'Based in', v: 'Campina Grande, Brazil' },
    { k: 'Experience', v: '6 years of Angular' },
    { k: 'Education', v: 'Information Systems' },
    { k: 'Working', v: 'Remote, worldwide' },
  ];
}
