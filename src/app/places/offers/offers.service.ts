import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  _offers: Offer[] = [
    {
      id: 'o1',
      place:  new Place('','','','',0)//this.placeService.places[0]
    },
    {
      id:'o2',
      place:new Place('','','','',0)//this.placeService.places[1]
    },
    {
      id: 'o3',
      place: new Place('','','','',0)//this.placeService.places[2]
    }
  ]
  constructor(private placesService: PlacesService) {
    for (let i = 0; i < this.offers.length; i++) {
      this.offers[i].place = this.placesService.places[i];
    }
   }

  get offers() {
    return [...this._offers];
  }

  getOffer(placeId) {
    return {...this.offers.find((offer) => offer.place.id = placeId )}
  }
}
