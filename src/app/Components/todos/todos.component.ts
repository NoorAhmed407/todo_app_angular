import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() { 
    this.todos = [
      {
        sno: 3,
        title: 'This is Title',
        desc: 'This is Description',
        active: false
      },
      {
        sno: 4,
        title: 'This is Title 4',
        desc: 'This is Description 4',
        active: true
      },
      {
        sno: 5,
        title: 'This is Title 5',
        desc: 'This is Description 5',
        active: false
      },
    ];
   }

  ngOnInit(): void {
  }


  deleteItem(todo:Todo){
    const myInd = this.todos.indexOf(todo);
    this.todos.splice(myInd, 1); 
  }
  addItem(todo:Todo){
    console.log('Item To be Added', todo);
    this.todos.push(todo);
  }

}
