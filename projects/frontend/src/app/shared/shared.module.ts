import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HotToastModule } from '@ngneat/hot-toast';
import { LayoutComponent } from './components/layout/layout.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    LayoutComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HotToastModule.forRoot()
  ],
  exports: [
    LayoutComponent,
    WrapperComponent,
    HotToastModule
  ]
})
export class SharedModule { }
