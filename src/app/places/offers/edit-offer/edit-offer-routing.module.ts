import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferResolverService } from 'src/app/offers/offer-resolver.service';

import { EditOfferPage } from './edit-offer.page';

const routes: Routes = [
  {
    path: '',
    component: EditOfferPage,
    resolve: {
      offer: OfferResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOfferPageRoutingModule {}
