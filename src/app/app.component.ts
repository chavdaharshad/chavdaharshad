import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name:'test', content:'just a test'}];
  constructor(){
  }
  onServerAdded(serverData: {serverName: string,serverContent: string}){
    console.log(serverData);
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {serverName: string,serverContent: string}){
    console.log(blueprintData);
    this.serverElements.push({
      type:'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  console.log('Test');
  onChangeFirst(){
    this.serverElements[0].name
  }

}
