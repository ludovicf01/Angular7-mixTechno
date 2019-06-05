import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

declare var TweenLite: any;

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.scss']
})
export class DemoOneComponent implements OnInit {

  @ViewChild('mushroom') mushroom: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  doIt(): void {
    TweenLite.to(this.mushroom.nativeElement, 2, {x: -1000});
    TweenLite.to(this.mushroom.nativeElement, 2, {x: 1000, delay: 4});
    
  }

}
