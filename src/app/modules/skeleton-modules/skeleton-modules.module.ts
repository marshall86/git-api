import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

export const myModules = [
    MaterialDesignModule,
];

export const skeletonComponents = [
    AppComponent,
    HeaderComponent
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
