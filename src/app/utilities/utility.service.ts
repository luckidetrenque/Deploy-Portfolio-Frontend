import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private element: boolean;

  constructor() {
    this.element = true;
   }

   public getData() {
    return this.element;
   }

  public showData(object: any) {
    return (this.element = true);
  }
  public hideData() {
    return (this.element = false);
  }
}
