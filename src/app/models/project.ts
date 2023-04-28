export interface Project {
  id: number;
  name: string;
  date: number;
  description: string;
  link1: string;
  link2: string;
  image: string;
}

export class Project implements Project {
  constructor(name: string, date: number, description: string, link1: string, link2: string, image: string) {
    this.name =name;
    this.date =date;
    this.description =description;
    this.link1 =link1;
    this.link2 =link2;
    this.image =image;
  }
}
