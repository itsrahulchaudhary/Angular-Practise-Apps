import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-demo',
  template:  `
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
           `,
  styleUrls: ['./template-reference-demo.component.css']
})
export class TemplateReferenceDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value:any){
    console.log(value);
  }

}
