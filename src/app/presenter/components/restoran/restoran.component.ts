import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.css']
})
export class RestoranComponent {
  videoSource = 'assets/videos/sample-5s.mp4';
  videoElement: HTMLVideoElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.videoElement = this.el.nativeElement.querySelector('video');
  }

  ngOnInit() {
    // Start the video playback
    this.renderer.setProperty(this.videoElement, 'autoplay', true);
    this.videoElement.play();
  }
}
