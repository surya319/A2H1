import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PromptComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
