import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardMessageService } from '../_service/card-message.service'

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  cartList = [];
  subcrip : Subscription;
  showList : boolean = true;
  showCart : boolean = false;
  constructor( private cardservice : CardMessageService ) {
    this.subcrip = this.cardservice.onData().subscribe(data =>
      {
        if(data)
        {
          this.cartList = data;
        }
        else
        {
          this.cartList = [];
        }
      })
   }

  ngOnInit(): void {
  }
  openCart()
  {
    this.showList = false;
    this.showCart = true;
  }
  openShop()
  {
    this.showCart = false;
    this.showList = true;
  }
}
