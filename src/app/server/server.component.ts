import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input('serElement') element = { type: 'string', name: 'string', content: 'string'};
  
  constructor() {
    console.log("constructor are called");
   }

  ngOnInit(): void {
    console.log("ngOnInit are called");

  }

}
