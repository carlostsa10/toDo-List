import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "ir ver ariana", checked: false}
  ];

  constructor() {};
  ngOnInit(): void {
    
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

}
