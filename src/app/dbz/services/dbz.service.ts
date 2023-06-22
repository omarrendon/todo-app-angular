import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzzService {
  constructor() {}
  public tasks: Tasks[] = [
    {
      id: uuid(),
      name: 'Shopping',
      priority: 7,
    },
    {
      id: uuid(),
      name: 'Watch Tv',
      priority: 2,
    },
    {
      id: uuid(),
      name: 'cook',
      priority: 8,
    },
  ];

  onNewTask(task: Tasks): void {
    const newTask: Tasks = {
      id: uuid(),
      ...task,
    };

    console.log('New task added ===', newTask);
    this.tasks.push(newTask);
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
