import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItems: any;
  constructor() { 
    this.localItems =localStorage.getItem('todos');
    this.localItems = JSON.parse(this.localItems);
    if(this.localItems !== null){
      this.todos = this.localItems;
    } else{
      this.todos = [];
    }
   }

  ngOnInit(): void {
  }


  deleteItem(todo:Todo){
    const myInd = this.todos.indexOf(todo);
    this.todos.splice(myInd, 1); 
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addItem(todo:Todo){
    console.log('Item To be Added', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleItem(todo: Todo){
    console.log('Todos Component me Event Aya', todo);
    const myInd = this.todos.indexOf(todo);
    this.todos[myInd].active = !this.todos[myInd].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

}
