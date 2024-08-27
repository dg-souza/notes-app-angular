import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  constructor() { }

  @Output('deleteTask') deleteTask: EventEmitter<any> = new EventEmitter()
  @Output('editTask') editTask: EventEmitter<any> = new EventEmitter()

  @Input() todo: string
}
