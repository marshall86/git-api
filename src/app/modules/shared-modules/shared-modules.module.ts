import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IApi } from 'src/app/interfaces/api';
import { ApiService } from 'src/app/services/api.service';
import { SkeletonModule } from '../skeleton-modules/skeleton-modules.module';

@NgModule({
  imports: [
        SkeletonModule,
        RouterModule
    ],
    exports: [
        SkeletonModule
    ],
     declarations: [],
    providers: [
        { provide: IApi, useClass: ApiService },
        // { provide: HTTP_INTERCEPTORS, useClass: ApiAuthInterceptor, multi: true }
    ]
})
export class SharedModule { }
