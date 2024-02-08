import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }
}
