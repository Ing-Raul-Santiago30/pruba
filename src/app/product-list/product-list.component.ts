import { Component } from '@angular/core';

// Define la interfaz para los productos
interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Audífonos', price: 100, description: 'Excelente volumen' },
    { name: 'Teclado', price: 300, description: 'Teclado mecánico' },
    { name: 'Mouse', price: 150, description: 'Mouse resistente al agua' }
  ];

  // Método para abrir el formulario
  openAddProductForm() {
    console.log('Abrir formulario para agregar un producto');
    // Aquí puedes agregar la lógica para abrir el formulario
  }

  // Método para agregar un producto
  addProduct(product: Product) {
    this.products.push(product);
  }

  // Método para eliminar un producto
  deleteProduct(index: number) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
    } else {
      console.error('Índice fuera de rango');
    }
  }
}
