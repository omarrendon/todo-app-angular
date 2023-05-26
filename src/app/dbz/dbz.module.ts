import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddTaskComponent],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
