import { ApplicationConfig, Injectable, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { Firestore, addDoc, collection, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../enviroments/enviroment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ),
  ],
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public firestore: Firestore) {}

  async createUser(firstName?: string, lastName?: string, email?: string) {
    const docRef = await addDoc(collection(this.firestore, 'users'), {
      email: email,
      firstName: firstName,
      lastName: lastName,
    });
    console.log('Document written with ID: ', docRef.id);
  }
}


