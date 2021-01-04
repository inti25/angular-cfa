import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';
// import firebase from '@angular/fire/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userObservable: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.userObservable = firebaseAuth.authState;
  }

  async isAuthendticated() {
    const currentUser = await this.firebaseAuth.currentUser;
    console.log('currentUser: ', currentUser, (currentUser !== undefined && currentUser !== null && !currentUser.isAnonymous));
    return currentUser !== undefined && currentUser !== null && !currentUser.isAnonymous;
  }

  async login(email: string, password: string) {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
