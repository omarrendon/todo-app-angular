import { Component } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';
import { DbzzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzzService) {}

  get tasks(): Tasks[] {
    return [...this.dbzService.tasks];
  }

  deleteTaskById(id: string) {
    return this.dbzService.deleteTaskById(id);
  }

  onNewTask(task: Tasks): void {
    return this.dbzService.onNewTask(task);
  }
}
