import { Component, OnInit } from '@angular/core';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase-js-issue';
  avatar = "assets/avatar.png";
  user: User | null = null;

  auth = getAuth();
  constructor() {}

  ngOnInit() {
    onAuthStateChanged(this.auth, user => {
      this.user = user;
      if(user && user.photoURL) {
        this.avatar = user.photoURL;
      } else {
        this.avatar = "assets/avatar.png";
      }
    })
  }

  login() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    signOut(this.auth)
  }

}
