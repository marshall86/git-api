import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repo, UserModel } from '../interfaces/generic';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // https://api.github.com/users/octocat
  // https://api.github.com/users/marshall86
  // https://api.github.com/users/johnpapa
  // https://api.github.com/users/mgechev
  // https://api.github.com/users/mgechev/repos

  private gitAPI = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUserData(user: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.gitAPI + user).pipe(map((response: UserModel) => response as UserModel));
  }

  getUsersList(): Observable<UserModel[]>{
    return forkJoin([
      this.getUserData('octocat'),
      this.getUserData('marshall86'),
      this.getUserData('johnpapa'),
      this.getUserData('mgechev'),
    ]);
  }

  getUserRepos(user: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.gitAPI + user + '/repos').pipe(map((response: Repo[]) => response as Repo[]));
  }

}
