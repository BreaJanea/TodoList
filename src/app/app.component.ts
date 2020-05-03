import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],



})
export class AppComponent {
  title = 'todolist';
  task:string ="";
  newTask:string ="";
 


  todoArray:Todo[] = [
    {task: "Walk Dog", completed: false},
    {task: "Clean Room", completed: true},
    {task: "Wash Dishes",completed: true},
    {task: "Finish Angular Lab",completed: false},
    {task: "Water Plants",completed: false},
    {task: "Post Selfie on Instagram", completed: true},
    {task: "Wash Clothes",completed: true}
  ]

  addTask = function() {
        this.todoArray.push({task: this.newTask, completed: false});
  }

  deleteTask = (todo: Todo) => {
  this.todoArray=this.todoArray.filter(todo => todo.task !== this.task);
  }
}
  