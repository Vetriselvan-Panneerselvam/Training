import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardMessageService {

  constructor() { }
  private subject = new Subject<any>();

  sentdata(data : any)
  {
    this.subject.next(data);
  }

  onData():Observable<any>
  {
    return this.subject.asObservable();
  }
}
