export class Data {
  public element: string;
  public visible: boolean;

  constructor() {
    this.element = '';
    this.visible = false;
  }

  public showData(element: string, object: any) {
    this.element = element;
    return (this.visible = true);
  }

  public hideData(element: string) {
    this.element = element;
    return (this.visible = false);
  }
}
