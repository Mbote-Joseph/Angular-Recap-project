import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Item 1',
      description: 'This is item 1',
      price: 10,
      originalPrice: 20,
      quantity: 5,
    },
    {
      name: 'Item 2',
      description: 'This is item 2',
      price: 15,
      originalPrice: 30,
      quantity: 3,
    },
    {
      name: 'Item 3',
      description: 'This is item 3',
      price: 12,
      originalPrice: 24,
      quantity: 4,
    },
    {
      name: 'Item 4',
      description: 'This is item 4',
      price: 20,
      originalPrice: 40,
      quantity: 6,
    },
    {
      name: 'Item 5',
      description: 'This is item 5',
      price: 18,
      originalPrice: 36,
      quantity: 2,
    },
    {
      name: 'Item 6',
      description: 'This is item 6',
      price: 22,
      originalPrice: 44,
      quantity: 5,
    },
    {
      name: 'Item 7',
      description: 'This is item 7',
      price: 14,
      originalPrice: 28,
      quantity: 7,
    },
    {
      name: 'Item 8',
      description: 'This is item 8',
      price: 16,
      originalPrice: 32,
      quantity: 3,
    },
    {
      name: 'Item 9',
      description: 'This is item 9',
      price: 21,
      originalPrice: 42,
      quantity: 1,
    },
    {
      name: 'Item 10',
      description: 'This is item 10',
      price: 17,
      originalPrice: 34,
      quantity: 6,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
