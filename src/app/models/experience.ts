export interface Experience {
  id: number;
  position: string;
  dateFrom: number;
  dateTo: number;
  company: string;
  description: string;
}

export class Experience implements Experience {
  constructor(position: string, dateFrom: number, dateTo: number, company: string, description: string) {
    this.position = position;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.company = company;
    this.description = description;
  }
}
