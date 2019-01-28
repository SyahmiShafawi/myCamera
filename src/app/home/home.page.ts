import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image:any;
  

  constructor(private camera:Camera, private imagepicker:ImagePicker){}

  opencamera(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {

     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.image = 'data:image/jpg;base64,' + imageData;
     this.image.reverse();
    }, (err) => {
      alert(err);
     // Handle error
    });
  }

  imagepickerlibary(){
    const options2: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.imagepicker.getPictures(options2).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          alert('Image URI: ' + results[i]);
          // this.image.push(results[i]);
          this.image = 'data:image/jpg;base64,' + results[i];
      }
    }, (err) => {
      alert(err); });
  }
}
