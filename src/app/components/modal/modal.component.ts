import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor() { }

  taskName: string = ''
  @Output() addNewTask = new EventEmitter<string>()

  isVisible: boolean = false

  save() {
    if (this.taskName) {
      this.addNewTask.emit(this.taskName)

      this.taskName = ''
      this.isVisible = false
    } else {
      alert('Preencha o nome da task')
    }
  }
}
