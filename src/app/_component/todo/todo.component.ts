import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
  toDo : string;
  showTodo = [];
  ngOnInit(): void {
  }
  addTodo()
  {
    this.showTodo.push(this.toDo);
    this.toDo = '';
  }
  deleteTodo(i)
  {
  this.showTodo.splice(i,1);
  }
}
