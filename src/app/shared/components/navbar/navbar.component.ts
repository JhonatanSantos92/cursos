import { Component, OnInit, Input } from '@angular/core';

interface HeaderOption {
  title: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // @Input() brandUrl: string;
   @Input() brand: string;
   @Input() logo: string;
  // @Input() options: HeaderOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
