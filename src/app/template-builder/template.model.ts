export class Template {
    public name: string;
    public imagePath: string;
    public footerString: string;
  
    constructor(name: string,  imagePath: string, footerString: string, ) {
      this.name = name;
      this.imagePath = imagePath;
      this.footerString = footerString;
    }
  }

  export enum HtmlTag {
    h1 = 'Main Heading',
    h2 = 'Secondary Heading',
    p = 'paragraph',
  }
  