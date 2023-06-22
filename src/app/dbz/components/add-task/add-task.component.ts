import { Component, EventEmitter, Output } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';

@Component({
  selector: 'app-dbz-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output()
  public onNewTask: EventEmitter<Tasks> = new EventEmitter();

  public task: Tasks = {
    name: '',
    priority: 0,
  };

  emitTask(): void {
    console.log('ADD COMPONET -');

    console.log(this.task);

    if (this.task.name.length === 0) return;

    this.onNewTask.emit(this.task);

    this.task.name = '';
    this.task.priority = 0;
  }
}
