import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UsersPageRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/modules/shared-modules/shared-modules.module';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './user/repo/repo.component';
import { ListItemComponent } from 'src/app/components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsersPageRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    RepoComponent,
    ListItemComponent
  ]
})
export class UsersPageModule { }
