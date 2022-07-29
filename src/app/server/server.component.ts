import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {

  @Input('serElement') element = { type: 'string', name: 'string', content: 'string'};
  @Input() name:string;
  
  constructor() {
    console.log("constructor are called");
   }

  ngOnInit(): void {
    console.log("ngOnInit are called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges are called");
    console.log(changes);
  }
}
