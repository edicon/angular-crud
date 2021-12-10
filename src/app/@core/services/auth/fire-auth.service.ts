import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import firebase from 'firebase/app';

import { IUser } from '@shared/schemas/user';
import { IAuthService } from './iauth.service';

@Injectable({
  providedIn: null,
})
export class FireAuthService implements IAuthService {
  constructor(private afa: AngularFireAuth) {}

  login(): Observable<IUser> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const responseAuth = from(this.afa.signInWithPopup(provider)).pipe(
      map((fireUser) => {
        const objUser: IUser = {
          uid: fireUser.user?.uid!,
          name: fireUser.user?.displayName!,
          email: fireUser.user?.email!,
          emailVerified: fireUser.user?.emailVerified!,
          photoURL: fireUser.user?.photoURL!,
          provider: fireUser.user?.providerId!,
        };
        return objUser;
      }),
      catchError(() => {
        throw new Error('error in the logout process');
      })
    );

    return responseAuth;
  }

  logout(): Observable<boolean> {
    return from(this.afa.signOut()).pipe(
      map(() => {
        return true;
      }),
      catchError(() => {
        throw new Error('error in the logout process');
      })
    );
  }

  isLoggedIn(): Observable<IUser> {
    return this.afa.authState.pipe(
      map((fireUser) => {
        if (fireUser === null) {
          throw new Error('user unavailable in state manager');
        }
        const objUser: IUser = {
          uid: fireUser?.uid!,
          name: fireUser?.displayName!,
          email: fireUser?.email!,
          emailVerified: fireUser?.emailVerified!,
          photoURL: fireUser?.photoURL!,
          provider: fireUser?.providerId!,
        };
        return objUser;
      }),
      catchError(() => throwError(false))
    );
  }

  sendPasswordResetEmail(email: string): void {
    from(this.afa.sendPasswordResetEmail(email));
  }
}
