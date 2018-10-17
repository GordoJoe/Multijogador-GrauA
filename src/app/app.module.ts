import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoardService } from './board.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ToastModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BoardService]
})
export class AppModule { }
