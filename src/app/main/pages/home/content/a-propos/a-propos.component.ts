import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss',
})
export class AProposComponent {
  ngOnInit(): void {
    this.annimation('#bloc-1');
    this.annimation('#bloc-2');
  }

  annimation(id: string): void {
    const blocOne = document.querySelector(id);

    let x, y;

    blocOne?.addEventListener('mousemove', function (e: any) {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    });
  }
}
