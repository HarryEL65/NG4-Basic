import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* My feature Module is a module like any other independant feature module.
  it should only import services from  Core Module.
  Warning!!!!
  -----------
  if feature modula A needs to import  service from feature module B 
  consider moving that feature into core.

  Rule of thumb is to try to create features wich don't depend on any other features just on services
  provided by CoreModule and components provided by SharedModule. */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MyFeatureModule { }
