import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string = "";
  desc: string = "";

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }


  formSubmit(){
    const todo = {
      sno: Math.random(),
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log('Form Aya');
    this.addTodo.emit(todo);
  }

}
