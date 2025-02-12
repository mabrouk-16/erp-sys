import { inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { UserService } from './user.service';
import { SnackService } from '../../../services/snack.service';
import { logBody, regBody, UserRoles } from '../../../models/User';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  private angularAuth = inject(Auth);
  private userService = inject(UserService);

  user$ = user(this.angularAuth);
  currentUser$ = authState(this.angularAuth);

  registerWithFB(body: regBody): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.angularAuth,
      body.email,
      body.password
    ).then((res) => {
      this.userService.addUserProfile(res.user.uid, {
        userId: res.user.uid,
        userName: body.userName,
        email: res.user.email || '',
        emailVerified: res.user.emailVerified || false,
        picture: null,
        birthDate: body.birthDate,
        phone: body.phone,
        gender: body.gender,
        address: body.address,
        role: UserRoles.user,
      });
    });
    return from(promise);
  }
  loginWithFB(body: logBody): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.angularAuth, body.email, body.password)
    );
  }
  logout(): Observable<void> {
    this.userService.logout()
    return from(signOut(this.angularAuth));
  }
}
