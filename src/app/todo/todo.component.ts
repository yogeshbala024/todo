import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0
  todo: Todo = new Todo(99, 'sdf', false, new Date());



  constructor(
    public todoService: TodoDataService,
    public route: ActivatedRoute,
    public router: Router
  ) {

  }



  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('testName',this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService.updateTodo('testName', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('testName', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

}
