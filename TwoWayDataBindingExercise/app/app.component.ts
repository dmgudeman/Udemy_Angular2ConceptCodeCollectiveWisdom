import { Component, Input, Output, EventEmitter} from '@angular/core'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'child',
  template: `
  <div>child: {{name}}</div>
   <button (click)="changeName()">Change Name</button>
   <input [ngModel]="name" (ngModelChange)="updateName($event)">`
})
export class ChildComponent {
  @Input() name:string="Hi there";
  @Output() nameChange = new EventEmitter<string>();
  @Output() nameUpdate = new EventEmitter<string>();
  changeName(){
    this.nameChange.emit(this.name + '*');
  }
  updateName($event:string){
    this.name = $event
    this.nameUpdate.emit(name);
    console.log(name);
  }

}

@Component({
  selector: 'my-app',
  template: ` 
  <!--<input [(ngModel)]="Name">-->
  
  
  <h2>{{title}}</h2>
    <child [(name)]="obj.myName"></child>
    <div>parent:{{obj.myName}}</div>
   <button (click)="changeName()">change name</button>
    <input [(ngModel)] ="obj.myName">{{obj.myName}}`,
})
export class AppComponent  { 
  Name ="lonny";
  title  = 'Angular 2 - two way binding';
  obj ={myName: "David"};
  other:string ="John";
  constructor() {
    console.clear();
  }
  changeName() {
    this.obj.myName += '-';
  }
}
