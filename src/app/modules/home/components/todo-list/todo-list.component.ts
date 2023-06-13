import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("lista") || "[]");

  constructor() {};
  ngDoCheck() {
this.setLocalStorage()
    
  }

  public setEmitTask(event: string){
    this.taskList.push({task: event, checked: false})
  }
  public deleteItemTask(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTasks(){
    const confirm = window.confirm("Tem certeza que deseja deletar todos os itens??")
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput (event: string, index: number) {
    
    if(!event.length){
      const confirm = window.confirm("Task esta vazia, deseja deletá-la?");

      if(confirm){
        this.deleteItemTask(index)
      }
    }
  }

  public setLocalStorage() {
    if(this.taskList){
      this.taskList.sort( (first, last)=> Number(first.checked) - Number(last.checked))
    localStorage.setItem("lista", JSON.stringify(this.taskList))
    }
  }

}
