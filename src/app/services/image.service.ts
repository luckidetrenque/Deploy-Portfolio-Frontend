import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  images: string[] = [];

  constructor(private storage: Storage) {}

  public uploadImage($event: any, folder: string, name: string) {
    const file = $event.target.files[0];
    let imageRef;
    folder == ''
      ? (imageRef = ref(this.storage, `images/${name}`))
      : (imageRef = ref(this.storage, `images/${folder}/${name}`));

    uploadBytes(imageRef, file)
      .then((response) => {
        this.getImages(folder, name);
      })
      .catch((error) => alert(error));
  }

  public getImages(folder: string, name: string) {
    const imagesRef = ref(this.storage,(folder = '' ? 'images' : `images/${folder}`));
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          if (item.fullPath.includes(name))
            this.url = await getDownloadURL(item);
            this.images.push(this.url);
          }
        // console.log(`Nombre de la imagen: ${this.getImageName(this.url)}`);
      })
      .catch((error) => alert(error));
  }

  public getImageName(url: string) {
    const regex =
      /(https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/lr-portfolio-frontend.appspot.com\/o\/)(.*)(\?.*)/gm;

    const replace = `$2`;
    const imageName = url.replace(regex, replace).replace(/([a-z]*%2[F])/gm, '');
    return imageName;
  }
}
