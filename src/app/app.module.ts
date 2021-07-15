import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateComponent as FormTemplateComponent } from './form-template/form-template.component';
import { MaterialModule} from '../app/material-module';
import { MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    FormTemplateComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
