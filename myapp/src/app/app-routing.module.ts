import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaneligibleComponent } from './components/loaneligible/loaneligible.component';


const routes: Routes = [
 {path:"",component:LoaneligibleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
