import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-demo',
  template:  `
    <input [(ngModel)]="name" type="text">
     {{name}}
       `,
  styleUrls: ['./two-way-binding-demo.component.css']
})
export class TwoWayBindingDemoComponent implements OnInit {

  public name:any="";
  constructor() { }

  ngOnInit(): void {
  }

}
