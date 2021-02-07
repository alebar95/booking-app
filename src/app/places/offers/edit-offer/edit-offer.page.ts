import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offer: Offer;
  constructor(private offersService: OffersService,
              private activatedRoute: ActivatedRoute,
              private navCtrl: NavController) {
                activatedRoute.data.subscribe(
                  (data) => {
                    if (data?.offer) this.offer = data.offer;
                  }
                );
               }

  ngOnInit() {

    /*this.activatedRoute.paramMap.subscribe(
      params => {
        if (params.has('placeId')) {
          const id = params.get('placeId');
          this.offer = this.offersService.getOffer(id);
        } else {
          this.navCtrl.navigateBack('places/tabs/offers');
          return;
        }
      }
    ) */
  }

}
