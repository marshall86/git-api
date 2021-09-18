import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contributor, Repo, UserModel } from '../interfaces/generic';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private gitAPI = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUserData(user: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.gitAPI + user).pipe(map((response: UserModel) => response));
  }

  getUsersList(userId: number): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://api.github.com/users', {
      params: new HttpParams().set('accept', 'application/vnd.github.v3+json').set('since', userId).set('per_page', 100)
    }).pipe(map((response: UserModel[]) => response));
  }

  getUserRepos(user: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.gitAPI + user + '/repos').pipe(map((response: Repo[]) => response));
  }

  getRepoContributors(user: string, repo: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>('https://api.github.com/repos/' + user + '/' + repo + '/contributors').pipe(map((response: Contributor[]) => response));
  }

}
