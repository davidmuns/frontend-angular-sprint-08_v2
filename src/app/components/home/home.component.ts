import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  disneyText!: string;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor() {
    this.disneyText = 'ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+';

  }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  // Gettinng screen size in real time
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth > 767) {
      this.disneyText = 'ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+';
    } else {
      this.disneyText = 'STREAM STAR WARS ON DISNEY+';
    }
  }
}
