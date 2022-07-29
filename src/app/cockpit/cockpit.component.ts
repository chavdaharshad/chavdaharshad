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

  constructor() {  }
  ngOnInit(): void {
  }
  onAddServer(nameInput){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:nameInput.value
    });
  }
  onAddBlueprint(contentInput){
    this.blueprintCreated.emit({
      serverName:contentInput.value,
      serverContent:contentInput.value

    });
  }

}
