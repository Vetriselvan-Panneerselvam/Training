import { Component, OnInit } from '@angular/core';
import { CardMessageService } from '../../_service/card-message.service';
import { Router } from '@angular/router';

export interface Ilist
{
  name: string;
  model:string;
  path:string;
  desc:string;
  price: number;
  quantity:number;
}
const ITEM_DATA : Ilist[] = [
  {name : 'redmi',model:'A3', path:'../../../assets/images/mobile1.jpg',desc:'4gb ram and 126 Gb internal memory. with snapdragon 625 dual core processcor',price:14000,quantity:1},
  {name : 'redmi',model:'Note 7',path:'../../../assets/images/mobile2.jpg',desc:'3gb ram and 64 Gb internal memory. with snapdragon 625 dual core processcor',price:11000,quantity:1},
  {name : 'redmi',model:'Note 8 pro',path:'../../../assets/images/mobile3.jpg',desc:'2gb ram and 16 Gb internal memory. with snapdragon 625 dual core processcor',price:9000,quantity:1},
  {name : 'redmi',model:'Y1',path:'../../../assets/images/mobile4.jpg',desc:'4gb ram and 126 Gb internal memory. with snapdragon 625 dual core processcor',price:14500,quantity:1},
  {name : 'redmi',model:'Y2',path:'../../../assets/images/mobile5.jpg',desc:'6gb ram and 126 Gb internal memory. with snapdragon 625 dual core processcor',price:19000,quantity:1}
]
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  cartList = [];
  itemList = ITEM_DATA;
  constructor( private carddata : CardMessageService, private router : Router) { }

  ngOnInit(): void {
  }

  openCart(url)
  {

    this.router.navigateByUrl(url);
    //this.carddata.sentdata(this.cartList);
  }

  addProduct(i)
  {
    let data = this.itemList[i];
    this.cartList.push(data);
    this.carddata.sentdata(this.cartList);
  }

}
