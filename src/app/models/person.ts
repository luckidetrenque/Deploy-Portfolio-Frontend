export interface Person {
  id: number;
  name: string;
  surname: string;
  degree: string;
  info: string;
  photo: string;
}

export class Person implements Person {
  constructor(name: string, surname: string, degree: string, info: string, photo: string) {
    this.name = name;
    this.surname = surname;
    this.degree = degree;
    this.info = info;
    this.photo = photo;
  }
}
