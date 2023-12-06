import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const firebaseConfig = {
  apiKey: "AIzaSyByz_ZGheATFqMrA-WH5YM2qG2hw7c4IO4",
  authDomain: "apirest-519d9.firebaseapp.com",
  databaseURL: "https://apirest-519d9-default-rtdb.firebaseio.com",
  projectId: "apirest-519d9",
  storageBucket: "apirest-519d9.appspot.com",
  messagingSenderId: "547133356845",
  appId: "1:547133356845:web:d7f83cd11872086c46b1a4",
  measurementId: "G-W3H0WCNDY7"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,    
  ],

  imports: [
    BrowserModule,

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
