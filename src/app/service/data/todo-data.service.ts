import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(public http:HttpClient) { }


  retrieveAllTodos(username : string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("Execute Hello world bean service");
  }

  deleteTodo(username : String, id : number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username : String, id : number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  createTodo(username : String, todo : Todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo);
  }

  updateTodo(username : String, id : number, todo : Todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

}
