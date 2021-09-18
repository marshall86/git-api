import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

export const myModules = [
    MaterialDesignModule,
];

export const skeletonComponents = [
    AppComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...myModules,
    ],
    exports: [
        RouterModule,
        ...skeletonComponents,
        ...myModules,
    ],
    declarations: [
        ...skeletonComponents
    ]
})
export class SkeletonModule { }
