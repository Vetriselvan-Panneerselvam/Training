import { Component, OnInit } from '@angular/core';
import { List } from '../../_modal/list';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  productName: string ;
  productCode: string ;
  productCategory: string ;
  productPrice: string ;
  productDesc: string ;
  productList : List[]

  constructor() { }

  ngOnInit(): void {
  }

  addProduct()
  {
    this.productList.push({productName:this.productName,productCode:this.productCode,productCategory:this.productCategory,productPrice:this.productPrice,productDesc:this.productDesc})
  }

}
