import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`mat-icon{ vertical-align: sub; }`]
})
export class HeaderComponent {

  @Input() title = '';
  @Input() icon = true;

  constructor(private location: Location) { }

  back(): void {
    this.location.back();
  }

}
