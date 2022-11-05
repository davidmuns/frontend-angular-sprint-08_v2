import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  followUs: string = "follow star wars:";

  allRights: string = "TM & © Lucasfilm Ltd. All Rights Reserved";

  constructor() { }

  ngOnInit(): void {
  }

}
