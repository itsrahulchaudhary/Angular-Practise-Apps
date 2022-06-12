import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-selector-demo',
  //selector: '.app-selector-demo',
  selector: '[app-selector-demo]',
  templateUrl: './selector-demo.component.html',
  styleUrls: ['./selector-demo.component.css']
})
export class SelectorDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
