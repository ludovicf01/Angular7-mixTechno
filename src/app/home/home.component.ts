import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateX(50%)', opacity: 0}),
            animate('300ms ease-out')
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateX(50%)'
            }))
        ])
    ])
],
encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  title = 'test-flex';
  columns: number[];

  constructor() { }

  ngOnInit() {
    this.columns = [0, 1, 2, 3, 4, 5];
  }

  addColumn() {
    this.columns.push(this.columns.length);
  }

  removeColumn() {
    this.columns.splice(-1, 1);
  }

}
