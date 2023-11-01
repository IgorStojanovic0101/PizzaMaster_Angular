import { Component, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-row-five',
  templateUrl: './row-five.component.html',
  styleUrls: ['./row-five.component.css']
})
export class RowFiveComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  videoSource = 'assets/videos/sample-5s.mp4';

  playVideo() {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
  }

  stopVideo() {
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }

}




