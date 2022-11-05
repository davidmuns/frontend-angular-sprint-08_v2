import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  links: string[] = [
    "https://www.facebook.com/StarWars",
    "https://www.instagram.com/starwars/",
    "https://twitter.com/starwars",
    "https://www.youtube.com/user/starwars"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
