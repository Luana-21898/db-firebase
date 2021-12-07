import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  adultPrice = 10;
  childPrice = 5;
  totalTicketPrice = 0;
  adultTicket =0;
  childTicket =0;

  constructor() { }

  ngOnInit() {
  }

  addTicket(item: string) {

    if (item =='adult') {
     
      this.adultTicket = ++this.adultTicket <= 4 ? this.adultTicket : 4;


    } else {
      if (this.adultTicket > 0) {

      this.childTicket =  ++this.childTicket <= 4 ? this.childTicket : 4;

      }
    }

    this.calculateTicketTotal()

  }

  removeTicket(item: string) {
    if (item =='adult') {
     this.adultTicket = --this.adultTicket >=0 ? this.adultTicket : 0;

     if (this.adultTicket==0) {
      this.childTicket = 0;
     }

    } else {
      this.childTicket = --this.childTicket >=0 ? this.childTicket : 0;
    }

    this.calculateTicketTotal()
  }

  calculateTicketTotal () {

    this.totalTicketPrice = (this.adultPrice * this.adultTicket) + (this.childPrice * this.childTicket)
  
  }

}
