import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCf6svndLt_6gmhtQ3reu6RE-gW9O5aN4M',
      authDomain: 'ng-recipe-book-1750b.firebaseapp.com'
    });
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
