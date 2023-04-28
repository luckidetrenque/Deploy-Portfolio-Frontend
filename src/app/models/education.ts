export interface Education {
  id: number;
  institution: string;
  logo: string;
  degree: string;
  dateFrom: number;
  dateTo: number;
}

export class Education implements Education {
  constructor(institution: string, logo: string, degree: string, dateFrom: number, dateTo: number) {
    this.institution = institution;
    this.logo = logo;
    this.degree = degree;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }
}
