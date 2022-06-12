import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  template:  `
            <button (click)="onClick()">Greet</button>
            {{greenting}}<br><br>
            <button (click)="onClickEvent($event)">Greet Event</button>
            <br><br>
            <button (click)="greenting='Welcome'">Welcome</button>
            `,
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent implements OnInit {

  public greenting:string="";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Welcome to Angular");
    this.greenting='Welocme to Angulars world';
  }

  onClickEvent(event:any){
    console.log(event);
    this.greenting=event.type;
  }

}
