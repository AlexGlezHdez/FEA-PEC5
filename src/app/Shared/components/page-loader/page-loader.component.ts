import { Component } from '@angular/core';
import { PageLoaderService } from '../../services/page-loader.service';
import { takeWhile } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { filter } from 'rxjs/operators';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent {
  loading: boolean;

  constructor(
    private pageLoaderService: PageLoaderService,
    private store: Store<AppState>
  ) {
    this.loading = false;

    this.store
      .pipe(filter((store) => store.characters.loading))
      .subscribe(() => {
        this.pageLoaderService.show();
      });

    this.store
      .pipe(filter((store) => store.characters.loaded))
      .subscribe(() => {
        // Agregamos un pequeño retraso antes de ocultar el spinner para simluar la carga
        setTimeout(() => {
          this.pageLoaderService.hide();
        }, 1000);
      });
  }

  private _subscribed: boolean = true;
  ngOnInit(): void {
    this.subscribe();
  }
  private subscribe() {
    this.pageLoaderService.state
      .pipe(takeWhile(() => this._subscribed))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
  ngOnDestroy() {
    this._subscribed = false;
  }
}
