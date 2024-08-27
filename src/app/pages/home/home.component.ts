import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from '../../components/todo/todo.component';
import { ModalComponent } from '../../components/modal/modal.component';

import { LocalStorageService } from '../../services/localStorageService.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent, FormsModule, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private local: LocalStorageService) { }

  @ViewChild(ModalComponent) childModal: ModalComponent

  todoArray: Array<string> = []
  todoArraySearch: Array<string> = []
  todoText: string
  todoIndex: number = -1

  ngOnInit() {
    this.getTasks()
  }

  searchTask(text: string) {
    if(text.trim() === '') {
      this.todoArray = [...this.local.get('tasks')]
    } else {
      this.todoArray = this.todoArraySearch.filter(item => item.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    }
  }

  saveTask(task: string) {
    this.todoArray.push(task)

    this.changeLocal()
    // if (this.todoText) {
    //   if (this.todoIndex !== -1) {
    //     this.todoArray[this.todoIndex] = this.todoText

    //     this.todoIndex = -1
    //     this.todoText = ''

    //     this.changeLocal()
    //   } else {
    //     this.todoArray.push(this.todoText)
    //     this.changeLocal()

    //     this.todoText = ''
    //   }
    // } else {
    //   alert('Preencha o nome da task')
    // }
  }

  deleteTask(index: number) {
    this.todoArray.splice(index, 1)

    this.changeLocal()
  }

  editTask(name: string, index: number) {
    this.todoText = name
    this.todoIndex = index
  }

  getTasks() {
    this.todoArray = this.local.get('tasks')
    this.todoArraySearch = this.local.get('tasks')
  }

  changeLocal() {
    this.local.set('tasks', this.todoArray)
  }
}
