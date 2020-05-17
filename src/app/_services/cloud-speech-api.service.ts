import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import SpeechApi from 'speech-to-text-api';

@Injectable({
  providedIn: 'root'
})
export class CloudSpeechApiService {

  googleApiKey = '';
  speechApi;

  constructor() { 
    this.googleApiKey = environment.googleApiKey;
  

  }


  // ---------- Initializing the Speech-to-Text API ----------

   initializeAPI(){

    if (this.googleApiKey === '') {

      return false;
     } else {
  
      this.speechApi = new SpeechApi(this.googleApiKey, {languageCode: 'en-US'});
      return true;
     }
   }


  // ---------- Starting Speech ----------

   async startSpeech(){

   await this.speechApi.start();
   return true;

   }

  // ---------- Stopping Speech and Returning Transcription ----------
   async stopSpeech(){

    const transcription = await this.speechApi.stop();

    if (transcription !== undefined) {
      return transcription[0].alternatives[0].transcript; 

    } else  {
      return 'Error: Transcription failed. Please try again.';

    }

   }

}
