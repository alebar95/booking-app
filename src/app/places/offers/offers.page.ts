import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/places/offers/offers.service';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Offer[];
  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.offers;
  }

}
