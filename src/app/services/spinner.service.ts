import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _spinnerSubject: Subject<boolean> = new Subject<boolean>();
  spinnerState = this._spinnerSubject.asObservable();

  constructor() { }

  show() {
    this._spinnerSubject.next(true);
  }

  hide() {
    this._spinnerSubject.next(false);
  }
}
