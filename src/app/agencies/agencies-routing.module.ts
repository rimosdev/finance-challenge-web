import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgenciesAddComponent } from './components/agencies-add/agencies-add.component';


const routes: Routes = [
  { path: '', component: AgenciesListComponent },
  { path: 'add', component: AgenciesAddComponent },
  { path: 'edit/:idAgency', component: AgenciesListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
