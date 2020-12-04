import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesListComponent } from './components/agencies-list/agencies-list.component';
import { AgenciesService } from './services/agencies.service';
import { HttpClientModule } from '@angular/common/http';
import { AgenciesItemComponent } from './components/agencies-item/agencies-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgenciesAddComponent } from './components/agencies-add/agencies-add.component';
import { AgenciesFormComponent } from './components/agencies-form/agencies-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgenciesListComponent, AgenciesItemComponent, AgenciesAddComponent, AgenciesFormComponent],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    ScrollingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [AgenciesService]
})
export class AgenciesModule { }
