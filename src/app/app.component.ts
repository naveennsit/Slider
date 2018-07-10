import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

const DUR = 500;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('move', [
      state('forward', style({transform: 'translateX(0)'})),
      state('backward', style({transform: 'translateX(0)'})),
      state('forward-inactive', style({transform: 'translateX(-100%)'})),
      state('backward-inactive', style({transform: 'translateX(-100%)'})),


      transition('forward => forward-inactive', [
        style({transform: 'translateX(0)'}),
        animate(DUR, style({transform: 'translateX(-100%)'}))
      ]),

      transition('forward-inactive => forward', [
        style({transform: 'translateX(100%)'}),
        animate(DUR, style({transform: 'translateX(0)'}))
      ]),

      transition('forward => backward-inactive', [
        style({transform: 'translateX(0)'}),
        animate(DUR, style({transform: 'translateX(100%)'}))
      ]),

      transition('forward-inactive => backward', [
        style({transform: 'translateX(-100%)'}),
        animate(DUR, style({transform: 'translateX(0)'}))
      ]),

      transition('backward-inactive => backward', [
        style({transform: 'translateX(-100%)'}),
        animate(DUR, style({transform: 'translateX(0)'}))
      ]),

      transition('backward => backward-inactive', [
        style({transform: 'translateX(0)'}),
        animate(DUR, style({transform: 'translateX(100%)'}))
      ]),

      transition('backward-inactive => forward', [
        style({transform: 'translateX(100%)'}),
        animate(DUR, style({transform: 'translateX(0)'}))
      ]),
      transition('backward => forward-inactive', [
        style({transform: 'translateX(0)'}),
        animate(DUR, style({transform: 'translateX(-100%)'}))
      ])


    ])
  ]
})
export class AppComponent {
  direction = 'forward';
  counter = 0;
  slideItems = [
    {src: './assets/any.jpg', title: 'Title 1'},
    {src: './assets/nature.jpg', title: 'Title 2'},
    {src: './assets/people.jpg', title: 'Title 3'},
    {src: './assets/sepia.jpg', title: 'Title 4'},
    {src: './assets/tech.jpg', title: 'Title 5'}
  ];

  showNextImage() {
    if (this.counter < this.slideItems.length - 1) {
      this.counter += 1;
      this.direction = 'forward';
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
      this.direction = 'backward';
    }
  }
}
