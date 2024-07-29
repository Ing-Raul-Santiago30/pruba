import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    description: ''
  };

  addProduct() {
    // Lógica para agregar el producto
    console.log('Producto agregado:', this.product);
  }
}
