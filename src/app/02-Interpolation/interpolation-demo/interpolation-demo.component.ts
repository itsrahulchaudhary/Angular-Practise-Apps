import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  template: ` 
               <p>Welcome to {{name}}</p>
               <p>{{2+2}}</p>
               <p>{{"Welcome to "+name}}</p>
               <p>{{name.length}}</p>
               <p>{{name.toUpperCase()}}</p>
               <p>{{greetUsers()}}</p>
               <p>{{siteUrl}}</p>
             `,
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {

  public name="Angular tutorials"
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUsers(){
    return "Hello "+this.name;
  }

}
