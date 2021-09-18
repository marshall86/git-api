import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IApi } from 'src/app/interfaces/api';
import { Repo, UserModel } from 'src/app/interfaces/generic';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: string;
  $user: Observable<UserModel> | undefined;
  $repo: Observable<Repo[]> | undefined;

  constructor(private api: IApi, private location: Location, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.$user = this.api.getUserData(this.userId);
    this.$repo = this.api.getUserRepos(this.userId);
  }

  back(): void {
    this.location.back();
  }

}
