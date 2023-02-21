import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{


  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date
  ){

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{
  message: String = "";

  todos :Todo[] = [];

  // todos = [
  //   new Todo(1,'Music Bajao!!', false, new Date()),
  //   new Todo(2,'Gaana gao!!', false, new Date()),
  //   new Todo(3,'Get a Job!!', false, new Date())

  //   // {id : 2,description : 'Whatsup'},
  //   // {id : 3,description : 'nacho'},
  // ]

  // todo = {
  //   id : 1,
  //   description : 'music bajao'
  // }

  constructor(
    public todoService : TodoDataService,
    public router : Router
    ){}


  ngOnInit(){
     this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('testName').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
        
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
  updateTodo(id: number){
    this.router.navigate(['todos', id])
  }

  deleteTodo(id: number){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('testName',id).subscribe(
      response =>{
        this.message = `Delete of todo ${id} successfull`;
        this.refreshTodos();
      }
    );
  }

}
