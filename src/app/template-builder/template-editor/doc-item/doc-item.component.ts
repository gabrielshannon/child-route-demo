import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HtmlTag } from '../../template.model';
@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.css']
})
export class DocItemComponent {

  public h1Tag = HtmlTag.h1;
  public h2Tag = HtmlTag.h2;
  public pTag = HtmlTag.p;

  constructor(private router: Router ) {
    console.log(this.router.url); //  /routename

  }

  addClassTemplate() {
  //   if (this.router.url === this.docFeature?.htmlTag) {
  //     return 'templateHeading1';
  //   } else if (this.h2Tag === this.docFeature?.htmlTag) {
  //     return 'templateHeading2';
  //   } else {
  //     return 'templateParagraph';
  //   }
  // }
  }
}
