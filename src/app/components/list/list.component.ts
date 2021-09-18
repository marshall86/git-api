import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListItemComponent {

  @Input() type: string | undefined;
  @Input() data!: any;

  identify(_index: number, item: { id: number; }): number {
    return item.id;
  }

}
