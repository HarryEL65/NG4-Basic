/* 3rd party Libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// We will register here all services which have one and only one instance per application
// (singleton services) should be implemented here. Typical example can be authentication
// service o user serice. 
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class CoreModule {
/* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
      if ( parentModule ) {
        throw new Error('CoreModule is already loaded. Import only in AppModule');
      }
  }
}
