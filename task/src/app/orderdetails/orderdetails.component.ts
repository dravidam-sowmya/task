import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  // particularOrder: any;
  model: any = {};
  model2: any = {};
  // orderId: any;
  // orderDueDate: any;
  // customerName: any;
  // customerAddress: any;
  // customerPhone: any;
  // totalOrders: any;
  // updmodel: any = {};


  constructor( private route:Router) {
    console.log(this.route.url);

   }
  orderlist: any = [
    {
      "orderId": 123, "orderDueDate": '23-06-19',
      "customerName": 'sowmya', "customerAddress": 'oldcity', "customerPhone": '8639067874',
      "totalOrders": 10
    },
    {
      "orderId": 456, "orderDueDate": '23-06-19',
      "customerName": 'sowmya', "customerAddress": 'oldcity', "customerPhone": '8639067874',
      "totalOrders": 10
    },
    {
      "orderId": 789, "orderDueDate": '23-06-19',
      "customerName": 'sowmya', "customerAddress": 'oldcity', "customerPhone": '8639067874',
      "totalOrders": 10
    }
  ]

  ngOnInit() {
  }
  // myval;
  // editData(id) {
  //   alert(id)
  //   for (let i = 0; i < this.orderlist.length; i++) {
  //     // const element = array[i];
  //     if (id == this.orderlist[i].orderId) {
  //       alert(JSON.stringify(this.orderlist[i]))
  //       this.particularOrder = this.orderlist[i]
  //     }
  //     // this.myval=id;
  //   }
  // }
  //updatedetails() {
  // this.orderlist.push({
  //   "orderId": this.orderId, "orderDueDate": this.orderDueDate,
  //   "customerName": this.customerName, "customerAddress": this.customerAddress, "customerPhone": this.customerPhone,
  //   "totalOrders": this.totalOrders
  // })
  // this.updmodel={};
  // let id = this.myval
  // for (let i = 0; i < this.orderlist.length; i++) {
  //   if (i = id) {
  //     this.orderlist[i] = this.particularOrder;
  //     this.particularOrder = {};
  //   }
  // }
  // }


  // save() {
  //   this.orderlist.push({
  //     "orderId": this.orderId, "orderDueDate": this.orderDueDate,
  //     "customerName": this.customerName, "customerAddress": this.customerAddress, "customerPhone": this.customerPhone,
  //     "totalOrders": this.totalOrders
  //   });
  //   this.model = {};

  // }
  save() {
    this.orderlist.push(this.model)

    this.model = {};
  }
  deleteDetails(i) {
    this.orderlist.splice(i, 1);
  }
  val;
  editData(j) {
    this.model2.orderId = this.orderlist[j].orderId;
    this.model2.orderDueDate = this.orderlist[j].orderDueDate;
    this.model2.customerName = this.orderlist[j].customerName;
    this.model2.customerAddress = this.orderlist[j].customerAddress;
    this.model2.customerPhone = this.orderlist[j].customerPhone;
    this.model2.totalOrders = this.orderlist[j].totalOrders;
    this.val = j;
  }
  updatedetails() {
    let j = this.val;
    for (let i = 0; i < this.orderlist.length; i++) {
      if (i == j) {
        this.orderlist[i] = this.model2;
        this.model2 = {};
      }
    }
  }
}

