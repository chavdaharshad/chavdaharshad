import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }
  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.newServerContent
    });
  }
  onAddBlueprint(contentInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:contentInput.value,
      serverContent:this.newServerContent

    });
  }

}
