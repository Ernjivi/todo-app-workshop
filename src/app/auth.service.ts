import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = this.afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

  oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider);
  }

  googleLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

}
