import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() data: any;

  @Output() item = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  addButton = false;
  amount = 0;
  emitTheCurrentProduct() {
    this.item.emit({'item':this.data , 'quantity':this.amount});
  }
}
