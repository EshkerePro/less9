import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './next/next.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'next', component: NextComponent
      }
    ])
  ],
})
export class NextModule { }
