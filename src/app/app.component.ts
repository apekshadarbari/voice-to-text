import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import SpeechApi from 'speech-to-text-api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'My Transcription App';
  googleApiKey="";
  speechApi;
  currentlyRecording = false;
  transcriptedText="";
  
  constructor(){
    this.googleApiKey = environment.googleApiKey;
  }
  
  //---------- Initialize Speech API ---------- 
  ngOnInit() {
   if(this.googleApiKey === ""){

    console.log("------ Google API key is missing ------");
   }
   else {

    this.speechApi = new SpeechApi(this.googleApiKey, {languageCode:'en-US'});
   }
   
  }
 
  //---------- Method to start listening ---------- 
  async startListening(){
      console.log("Started Listening");
      this.currentlyRecording = true;
      await this.speechApi.start();
      

  }

  //---------- Method to stop listening and return transcription----------  
  async stopListening(){
    console.log("Stopped Listening");
    this.currentlyRecording = false;
    let transcription = await this.speechApi.stop();

    if(transcription !== undefined){
        this.transcriptedText = transcription[0].alternatives[0].transcript;



    } else {
        this.transcriptedText = "Error: Transcription failed. Please try again.";



    }
    
  }
  
}






