import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NextModule} from './next/next.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NextModule,
        RouterModule.forRoot([
          {
            path: 'next', loadChildren: () => import('./next/next.module').then(m => m.NextModule)
          }
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
