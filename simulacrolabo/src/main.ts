import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from './enviroments/enviroment';

export const firebaseApp = initializeApp(environment.firebase);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
