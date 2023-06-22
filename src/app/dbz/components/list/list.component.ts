import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../../interfaces/task.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public tasksList: Tasks[] = [
    {
      name: 'cook',
      priority: 8,
    },
  ];
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteTask(index: number): void {
    console.log({ index });
    this.onDelete.emit(index);
  }
}
