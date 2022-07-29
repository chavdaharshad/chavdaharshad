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
  onAddServer(nameInput,contentInput){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:contentInput.value
    });
  }
  onAddBlueprint(nameInput,contentInput){
    this.blueprintCreated.emit({
      serverName:contentInput.value,
      serverContent:nameInput.value

    });
  }

}
