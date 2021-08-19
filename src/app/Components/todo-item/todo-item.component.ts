import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }


  deleteTodo(todo:any){
    console.log('Event Triggered', todo);
    this.todoDelete.emit(todo);
  }


  onCheckBoxClick(todo: any) {
    console.log('CheckBox', todo);
    this.todoToggle.emit(todo);
  }


}
