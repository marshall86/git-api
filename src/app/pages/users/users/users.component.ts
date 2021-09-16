import { Component, OnInit } from '@angular/core';
import { IApi } from 'src/app/interfaces/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private api: IApi) { }

  ngOnInit(): void {
    console.log('init');
    this.api.getUsersList().subscribe((r) => console.log(r));
  }

}
