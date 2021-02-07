import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;
  constructor(private offerService: OffersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        if (params.has('placeId')) {
          const id = params.get('placeId');
          this.offer = this.offerService.getOffer(id);
        } else {
          this.navCtrl.navigateBack('places/tabs/offers');
        }
      }
    )

  }

}
