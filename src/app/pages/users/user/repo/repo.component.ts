import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IApi } from 'src/app/interfaces/api';
import { Contributor } from 'src/app/interfaces/generic';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styles: [`h2 { margin: 20px 30px 0 30px; }`]
})
export class RepoComponent implements OnInit {

  user: string;
  repo: string;
  $contributors: Observable<Contributor[]> | undefined;

  constructor(private route: ActivatedRoute, private api: IApi) {
    this.user = this.route.snapshot.params['id'];
    this.repo = this.route.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.$contributors = this.api.getRepoContributors(this.user, this.repo);
  }

}
