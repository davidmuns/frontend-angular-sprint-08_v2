import { Component, OnInit } from '@angular/core';

interface FooterLink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
  
  footerLinks: FooterLink[] = [
    {title: "Terms of Use", url: "https://disneytermsofuse.com/"},
    {title: "Additional Content Information", url: "https://support.disney.com/hc/es-es"},
    {title: "Privacy Policy", url: "https://privacy.thewaltdisneycompany.com/en/"},
    {title: "Children's Online Privacy Policy", url: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"},
    {title: "Your California Privacy Rights", url: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"},
    {title: "Star Wars at shopDisney", url: "https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"},
    {title: "Star Wars Helpdesk", url: "https://support.starwars.com/hc/es-es"},
    {title: "Interest-Based Ads", url: "https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"},
    {title: "Do Not Sell My Personal Information", url: "https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
