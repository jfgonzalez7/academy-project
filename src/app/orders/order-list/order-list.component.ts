import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service'
import { order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'nombre_producto', 'precio', 'cantidad'];
  orderList: Array<order>;

  constructor(private orderService: OrderService) { }

  @Input() idClient: number;

  ngOnInit() {

    this.orderService.findOrdersByIdClient(this.idClient).subscribe(
      (response) => {
        this.orderList = response;

        this.orderList.forEach(input =>{
           console.log(this.orderService.findProductByIdProdcuto(input.idProd).subscribe());
        });


      }, error => {
        // error message
      }
    );
  }

}
