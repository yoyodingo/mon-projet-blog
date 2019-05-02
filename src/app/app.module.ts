import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
