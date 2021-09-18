import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`mat-icon{ vertical-align: sub; }`]
})
export class HeaderComponent {

  @Input() title: string = '';
  @Input() icon: boolean = true;

  constructor(private location: Location) { }

  back() {
    this.location.back();
  }

}
