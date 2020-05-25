import { Component, OnInit } from '@angular/core';
import { LIFFErrorObject } from 'liff-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.liffID()
  }

 async liffID() {
   liff.ready.then(() => {

    liff.init({
      //liffId: '1654240580-JWb1rEpx' //https://aae606.github.io/myliff/
       liffId: '1654187718-l0z2DKvr' //https://aae606.github.io/liff/
    }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }
    })
    .catch((err: LIFFErrorObject) => console.error(err.message))

   })
    
  }



}
