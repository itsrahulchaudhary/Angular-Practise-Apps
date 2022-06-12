import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-demo',
  template:  `
             <h2 class="text-success">Hello World</h2>
             <h2 [class]="successClass">Hello World</h2>
             <h2 [class.text-danger]="hasErr">Hello World</h2>
             <h2 [ngClass]="messageClass">Hello World</h2>
  `,
  styles: [ `
              .text-success{
                 color:green;
                }
              .text-danger{
                 color:red;
                }
              .text-special{
                 font-style : italic;
                }
  `]
})
export class ClassBindingDemoComponent implements OnInit {

  successClass :string = "text-success";
  hasErr:boolean = true;
  isSpecial : boolean = true;
 
  messageClass =  {
    "text-success":!this.hasErr,
    "text-danger": this.hasErr,
    "text-special": this.isSpecial
  } 


  constructor() { }

  ngOnInit(): void {
  }

}
