import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styles: [`p{
    color:blue;
  }`]
})
export class StyleDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
