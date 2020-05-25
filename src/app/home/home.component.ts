import { Component, OnInit } from "@angular/core";
import { LIFFErrorObject } from "liff-type";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  Os: string;
  Language: String;
  Version: String;
  isInClient: boolean;
  constructor() {}

  ngOnInit() {
     this.liffID();
     this.getEnvironment();
  }

   liffID() {
   // liff.ready.then(() => {
      liff
        .init({
          //liffId: '1654240580-JWb1rEpx' //https://aae606.github.io/myliff/
          liffId: "1654187718-l0z2DKvr", //https://aae606.github.io/liff/
        })
        .then(() => {
          if (!liff.isLoggedIn()) {
            liff.login();
            this.getEnvironment()
          } else {
            this.getEnvironment()
          }
        })
        .catch((err: LIFFErrorObject) => console.error(err.message));
  //  });
  }
  
  getEnvironment(){
  //  this.Os = liff.getOS()
    document.getElementById("language").append(liff.getLanguage())
    document.getElementById("os").append(liff.getOS())
      document.getElementById("version").append(liff.getVersion())
      document.getElementById("accessToken").append(liff.getAccessToken())
     document.getElementById('isInClient').append('oooo')
  }

}
