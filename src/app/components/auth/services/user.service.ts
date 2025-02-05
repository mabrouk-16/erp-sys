import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import {
  CollectionReference,
  doc,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { User } from '../../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  // private authService = inject(AuthApiService);
  user: WritableSignal<User | null | undefined> = signal(null);
  usersCollections!: CollectionReference;

  constructor() {}

  setUserFromFB(id: string) {
    const ref = doc(this.firestore, 'users', id);
    return from(getDoc(ref)).subscribe((res) => {
      this.user.set({ ...res.data() });
    });
  }
  getUserProfile(id: string) {
    const ref = doc(this.firestore, 'users', id);
    return from(getDoc(ref));
  }
  //  authUserProfile() {
  //   this.authService.user$.pipe(switchMap((user)=>{
  //     if (!user?.uid) {
  //       return of(null)
  //     }
  //     const ref = doc(this.firestore,'users',user.uid);
  //     return docData(ref) as Observable<UserProfile>
  //   }))
  // }

  saveUser(user: User | undefined) {
    this.user?.set(user);
    localStorage.setItem('user', JSON.stringify(this.user()));
  }
  getUser() {
    if (localStorage.getItem('user')) {
      const currentUser = JSON.parse(localStorage.getItem('user')!);
      this.user?.set(currentUser);
    }
  }
  addUserProfile(id: string, user: User) {
    const ref = doc(this.firestore, 'users', id);
    return from(setDoc(ref, user));
  }
  updateUserProfile(id: string, user: User) {
    console.log(id);
    const ref = doc(this.firestore, 'users', id);
    return from(updateDoc(ref, { ...user }));
  }
}
