import { inject, Injectable, signal } from '@angular/core';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';
import { User } from '../models/User';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private firestore = inject(Firestore);
  users = signal<User[]>([]);

  getAllUsers() {
    return from(getDocs(collection(this.firestore, 'users')));
  }
}
