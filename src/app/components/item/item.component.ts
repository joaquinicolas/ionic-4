import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item:Item
  constructor() { }

  ngOnInit() {}

}
