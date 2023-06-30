import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NmodalService {

  constructor() { }
  private subject = new BehaviorSubject<string>('');

  sendAction(action: string) {
    this.subject.next(action);
  }

  getAction() {
    return this.subject.asObservable();
  }
}
