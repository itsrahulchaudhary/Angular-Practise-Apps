import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorDemoComponent } from './CE/01-components/selector-demo/selector-demo.component';
import { StyleDemoComponent } from './CE/01-components/style-demo/style-demo.component';
import { TemplateDemoComponent } from './CE/01-components/template-demo/template-demo.component';
import { InterpolationDemoComponent } from './CE/02-Interpolation/interpolation-demo/interpolation-demo.component';
import { PropertyBindingDemoComponent } from './CE/03-PropertyBinding/property-binding-demo/property-binding-demo.component';
import { ClassBindingDemoComponent } from './CE/04-ClassBinding/class-binding-demo/class-binding-demo.component';
import { StyleBindingDemoComponent } from './CE/05-StyleBinding/style-binding-demo/style-binding-demo.component';
import { EventBindingDemoComponent } from './CE/06-EventBinding/event-binding-demo/event-binding-demo.component';
import { TemplateReferenceDemoComponent } from './CE/07-TemplateReference/template-reference-demo/template-reference-demo.component';
import { TwoWayBindingDemoComponent } from './CE/08-TwoWayBinding/two-way-binding-demo/two-way-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorDemoComponent,
    StyleDemoComponent,
    TemplateDemoComponent,
    InterpolationDemoComponent,
    PropertyBindingDemoComponent,
    ClassBindingDemoComponent,
    StyleBindingDemoComponent,
    EventBindingDemoComponent,
    TemplateReferenceDemoComponent,
    TwoWayBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
