import { Component, OnInit,ChangeDetectorRef,Input } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { CardMessageService} from '../../_service/card-message.service'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class  UserCardComponent implements OnInit {

  @Input() cartitem : any;

  cartList = [
    {name : 'redmi',model:'A3', path:'../../../assets/images/mobile1.jpg',desc:'4gb ram and 126 Gb internal memory. with snapdragon 625 dual core processcor',price:14000,quantity:1},
  ];
  subcription : Subscription;
  constructor( private carddata : CardMessageService, private def : ChangeDetectorRef,private router : Router) {
//  this.subcription = this.carddata.onData().subscribe(data =>
//   {
//     console.log(data)
//     if(data)
//     {
//       this.cartList = data;
//       this.def.detectChanges();
//     }
//     else
//     {
//       this.cartList = [];
//     }
//     console.log(this.cartList)
//   })

   }

  ngOnInit(): void {
   this.cartList = this.cartitem;
    console.log(this.cartitem)
  }

  openList(url)
  {
    this.router.navigateByUrl(url);
  }
  subQuantity(i)
  {
    let qty =  this.cartList[i].quantity
    if(qty === 1)
    {

    }
    else
    {
      qty--
      this.cartList[i].quantity = qty
    }
  }
  addQuantity(i)
  {
   let qty =  this.cartList[i].quantity
   qty++
   this.cartList[i].quantity  = qty
  }
  deleteItem(i)
  {
    this.cartList.splice(i,1)
  }
}
