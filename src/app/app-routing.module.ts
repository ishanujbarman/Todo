import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTableComponent } from './todo-table/todo-table.component';

const routes: Routes = [
  {path : 'todo-details', component:TodoTableComponent},
  {path : 'todo-list', component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
