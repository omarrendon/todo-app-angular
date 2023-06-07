import { Component } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public tasks: Tasks[] = [
    {
      name: 'Shopping',
      priority: 7,
    },
    {
      name: 'Watch Tv',
      priority: 2,
    },
    {
      name: 'cook',
      priority: 8,
    },
  ];

  constructor() {}
}
