import { Component, ElementRef,ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subscription, tap, of } from 'rxjs';
import { ServiceResponse } from 'src/app/domain/shared/client/serviceResponse';
import { HomeService } from 'src/app/presenter/services/home/home.service';


@Component({
  selector: 'app-row-five',
  templateUrl: './row-five.component.html',
  styleUrls: ['./row-five.component.css']
})
export class RowFiveComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  video$!: Observable<string>;

  private stringSub!: Subscription;

  constructor(public service : HomeService) {}

  
  ngOnInit(): void {

    this.stringSub = this.service.GetVideo()
    .pipe(
      tap((response:ServiceResponse<string>) => this.handleVideoResponse(response)))
      .subscribe();

  }
  ngOnDestroy() {
    console.log("Unsubscribed!")
    this.stringSub?.unsubscribe();
  }

  private handleVideoResponse(response: ServiceResponse<string>) {
    console.log(response)

    this.video$ = of(response.payload);
    
    // Add an event listener for the loadedmetadata event
    this.videoPlayer.nativeElement.addEventListener('loadedmetadata', () => {
      // When metadata is loaded, trigger video playback
    //  this.videoPlayer.nativeElement.play()
    
    });
  }

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




