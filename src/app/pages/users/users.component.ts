import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { UserModel } from 'src/app/interfaces/generic';
import { IApi } from 'src/app/interfaces/api';
import { of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {

    usersList: UserModel[] = [];
    initialList: UserModel[] = [];
    showContent = false;
    _destroyed$ = new Subject();

    @ViewChild(MatPaginator) paginator = { length: 0, pageIndex: 0, pageSize: 10 };

    constructor(private api: IApi) { }

    ngOnInit(): void {
        this.loadUsers(this.paginator.pageIndex);
    }

    ngOnDestroy(): void {
        this._destroyed$.complete();
        this._destroyed$.unsubscribe();
    }

    loadUsers(pageIndex: number): void {
        this.api.getUsersList(pageIndex)
            .pipe(
                catchError(() => of([])),
                takeUntil(this._destroyed$)
            ).subscribe((users: UserModel[]) => {
                this.initialList = users;
                this.paginate();
            });
    }

    paginate(): void {
        this.usersList = this.initialList.slice().splice((((this.paginator.pageIndex + 1) * this.paginator.pageSize)) - this.paginator.pageSize, this.paginator.pageSize);
        this.paginator.length = this.initialList.length;
        this.showContent = true;
    }

    async tablePageChange(e: PageEvent): Promise<void> {
        this.paginator.pageIndex = e.pageIndex;
        this.usersList = this.initialList.slice().splice((((e.pageIndex + 1) * e.pageSize)) - e.pageSize, e.pageSize);
    }

}
