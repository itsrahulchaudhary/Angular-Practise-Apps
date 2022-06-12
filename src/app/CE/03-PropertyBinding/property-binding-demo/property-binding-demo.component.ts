import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  template:  `
     <input type="text" value="Rahul"> <br><br> 
     <input [id]="myId" type="text" value="Rahul"> <br><br>  <!-- property binding -->
     <input id={{myId}} type="text" value="Rahul"> <br><br>   <!-- Interpolation  -->
     <input [disabled]="isDesabled" [id]="myId" type="text" value="Rahul"> <br><br>  <!-- property binding -->
  
  `,
  styleUrls: ['./property-binding-demo.component.css']
})
export class PropertyBindingDemoComponent implements OnInit {

  public myId="testId"
  public isDesabled=true;

  constructor() { }

  ngOnInit(): void {
  }

}
