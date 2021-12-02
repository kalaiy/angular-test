import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ExtendedInput } from '../components/extended-input/extended-input';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, HomeComponent, ExtendedInput],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
