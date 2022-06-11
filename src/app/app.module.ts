import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorDemoComponent } from './01-components/selector-demo/selector-demo.component';
import { StyleDemoComponent } from './01-components/style-demo/style-demo.component';
import { TemplateDemoComponent } from './01-components/template-demo/template-demo.component';
import { InterpolationDemoComponent } from './02-Interpolation/interpolation-demo/interpolation-demo.component';
import { PropertyBindingDemoComponent } from './03-PropertyBinding/property-binding-demo/property-binding-demo.component';
import { ClassBindingDemoComponent } from './04-ClassBinding/class-binding-demo/class-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorDemoComponent,
    StyleDemoComponent,
    TemplateDemoComponent,
    InterpolationDemoComponent,
    PropertyBindingDemoComponent,
    ClassBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
