import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

/* our own custom components */
/* import {  someCustomComponent } from './some-custom/some-custom.components'; */

/* All the "dumb" components and pipes should be implemented here.
These components don't import and inject services from core or other features
in their constructors. They should receive all data though attributes n the templates
of the component using them. This all sums up to the fact that ShareModule doesn't have any dependency
to the rest of our application.
It is also the perfect place to import and re-export Angular Material components. */

@NgModule({
  imports: [
     /* angular stuff */
    CommonModule,
    FormsModule,
    /* third party */
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    // someCustomComponent
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    /* third party */
    MatButtonModule,
    MatCheckboxModule
    /* my shared component
    someCustomComponent */
  ]
})
export class SharedModule { }
