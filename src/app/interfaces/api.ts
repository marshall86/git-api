import { Observable } from "rxjs";
import { Contributor, Repo, UserModel } from "./generic";

export abstract class IApi {

    abstract getUserData(user: string): Observable<UserModel>;
    abstract getUsersList(pageIndex: number): Observable<UserModel[]>;
    abstract getUserRepos(user: string): Observable<Repo[]>;
    abstract getRepoContributors(user: string, repo: string): Observable<Contributor[]>;

}
