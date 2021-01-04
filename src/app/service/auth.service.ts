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

  // signup(email: string, password: string) {
  //   this.firebaseAuth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(value => {
  //     console.log('Success!', value);
  //   })
  //   .catch(err => {
  //     console.log('Something went wrong:',err.message);
  //   });
  // }

  async login(email: string, password: string) {
    return await this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
