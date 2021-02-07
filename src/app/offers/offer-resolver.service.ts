import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from '../places/offers/offer.model';
import { OffersService } from '../places/offers/offers.service';

@Injectable({
  providedIn: 'root'
})
export class OfferResolverService implements Resolve<Offer> {

  constructor(private offersService: OffersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Offer | Observable<Offer> | Promise<Offer> {
    return this.offersService.getOffer(route.paramMap.get('placeId'));
  }
}
