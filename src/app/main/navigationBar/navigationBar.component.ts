import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationBar',
  templateUrl: './navigationBar.component.html',
  styleUrls: ['./navigationBar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    function headerFixed() {
      const header = document.querySelector('.navigationBar-main-container');
      if (window.scrollY > 0) {
        header?.classList.add('active');
        console.log('scrooll');
      } else {
        header?.classList.remove('active');
      }
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 0) {
          header?.classList.add('active');
          console.log('scrooll');
        } else {
          header?.classList.remove('active');
        }
      });
    }
    headerFixed();
  }

  mode: string = 'sombre';
  handleClick() {
    document.body?.classList.toggle('darkTheme');
    if (this.mode === 'sombre') {
      this.mode = 'ligth';
    } else {
      this.mode = 'sombre';
    }
  }
}
