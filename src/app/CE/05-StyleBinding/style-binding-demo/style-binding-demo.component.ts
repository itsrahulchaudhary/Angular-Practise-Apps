import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-demo',
  template: ` 
             <h3 [style.color]="'blue'">Style Binding 1</h3>
             <h3 [style.color]="hasError ? 'red':'green'">Style Binding 2</h3>
             <h3 [style.color]="highlightColor">Style Binding 3</h3>
             <h3 [ngStyle]="titileStyle">Style Binding 4</h3>
             `,
  styleUrls: []
})
export class StyleBindingDemoComponent implements OnInit {

  public hasError=false;
  public highlightColor="orange";
  public titileStyle = {
    color:"blue",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
