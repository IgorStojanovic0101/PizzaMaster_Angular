import { Component } from '@angular/core';

@Component({
  selector: 'app-row-one',
  templateUrl: './row-one.component.html',
  styleUrls: ['./row-one.component.css']
})
export class RowOneComponent {
  interval:number = 2000;

  reklame = [

    {title: 'First Slide', short: 'First Slide Short', src: "../assets/images/rek6.webp"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../assets/images/rek2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../assets/images/rek3.jpg"},
    {title: 'Fifth Slide', short: 'Fifth Slide Short', src: "../assets/images/rek5.jpg"},


  ];
}
