import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageLoaderService {
  private loading$: Subject<boolean> = new BehaviorSubject(false);

  constructor() {}

  show() {
    this.loading$.next(true);
  }

  hide() {
    console.log('Ocultando!!!');
    this.loading$.next(false);
  }

  get state() {
    return this.loading$.asObservable();
  }
}
