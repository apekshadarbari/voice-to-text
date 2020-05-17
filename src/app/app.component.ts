import { Component, OnInit } from '@angular/core';
import { CloudSpeechApiService} from './_services/cloud-speech-api.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'My Transcription App';
  currentlyRecording = false;
  transcriptedText = '';
 

  constructor(private CloudSpeechApiService: CloudSpeechApiService) {
    
  }

  ngOnInit(){

    let initialized = this.CloudSpeechApiService.initializeAPI();
    if(initialized == false){
      alert('Google API Key is Missing. Please configure it and try again.');

    }
  }


  // ---------- Method to start listening ----------

   startListening() {
        this.CloudSpeechApiService.startSpeech();
        this.currentlyRecording = true;

  }

  // ---------- Method to stop listening and display returned transcription----------

    stopListening() {
   
      this.CloudSpeechApiService.stopSpeech().then(res => {
        this.transcriptedText = res;
        this.currentlyRecording = false;

      })
     


  
  }

}






