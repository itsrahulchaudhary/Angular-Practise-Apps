import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  template:  `<div>
                Inline template demo
              </div>`,
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
