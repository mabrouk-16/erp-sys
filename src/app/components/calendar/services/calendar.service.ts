import { inject, Injectable, signal } from '@angular/core';
import { Firestore, getDocs, collection, doc, updateDoc } from '@angular/fire/firestore';
import { CalendarEvent } from 'angular-calendar';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  private firestore = inject(Firestore);

  getAllEvents() {
    return from(getDocs(collection(this.firestore, 'events')));
  }
  updateEvents(id: string, events: CalendarEvent[]) {
    console.log(id);
    const ref = doc(this.firestore, 'events', id);
    return from(updateDoc(ref, { events: events }));
  }
}
