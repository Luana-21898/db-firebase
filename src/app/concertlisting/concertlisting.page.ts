import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Concert } from '../models/concert';

@Component({
  selector: 'app-concertlisting',
  templateUrl: './concertlisting.page.html',
  styleUrls: ['./concertlisting.page.scss'],
})
export class ConcertlistingPage implements OnInit {

  constructor(private http: HttpClient) { }

  listing: Concert[] | any;

  ngOnInit() {
    this.GetConcerts();
  }

  selectedConcert: Concert | any;
  GetConcerts() {
    this.http.get('https://my-json-server.typicode.com/AlexsonSilva/music-concert/concerts').subscribe(concerts => {
      console.log(concerts);
      this.listing = concerts;

      this.selectedConcert = this.listing[0];

      // if (concerts.runningTimes === null) {

      // }
    })
  }

  message: string = `Please, select a concert`;
  selectConcert(concert: Concert): void {
    this.message = `Concert selected: ${concert.name}`
    this.selectedConcert = concert;
    console.log('selecting a concert');
  }


}
