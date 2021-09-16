import { Observable } from "rxjs";
import { Repo, UserModel } from "./generic";

export abstract class IApi {

    abstract getUserData(user: string): Observable<UserModel>;
    abstract getUsersList(): Observable<UserModel[]>;
    abstract getUserRepos(user: string): Observable<Repo[]>;

}
