
import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviz';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyAKUMt2OgEsTCjteLt6Y88ite9CWuOvw5Y",
      authDomain: "movies-984e1.firebaseapp.com",
      projectId: "movies-984e1",
      storageBucket: "movies-984e1.appspot.com",
      messagingSenderId: "755752769758",
      appId: "1:755752769758:web:c187381a9a655f13c6ca4f"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
