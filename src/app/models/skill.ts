export interface Skill {
  id: number;
  name: string;
  level: number;
  image: string;
}

export class Skill implements Skill {
  constructor(name: string, level: number, image: string) {
    this.name = name;
    this.level = level;
    this.image = image;
  }
}
