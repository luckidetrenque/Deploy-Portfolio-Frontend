import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imageRef = ref(this.storage, `images/${name}`);
    uploadBytes(imageRef, file)
    .then(response => {this.getImages()})
    .catch(error => alert(error))
  }

  public getImages() {
    const imagesRef = ref(this.storage, 'images');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log(`URL de la imagen: ${this.url}`);
      }
    })
    .catch(error => alert(error));
  }
}
