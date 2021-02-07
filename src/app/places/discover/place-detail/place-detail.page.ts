import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private placeService: PlacesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private navCtrl: NavController,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        if ( params.has('placeId') ) {
          const id = params.get('placeId');
          this.place = this.placeService.getPlace(id);
        } else {
          this.navCtrl.navigateBack('places/tabs/discover');
          //this.router.navigate(['places/tabs/discover'])
          return;
        }
      }
    )
  }

  onBookClicked() {
    //this.navCtrl.navigateBack(['places/tabs/discover']);
    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {place: this.place},id: 'create-book'}).then(
      modal => {
        modal.present();
        return modal.onDidDismiss();
      }
    ).then( result => {
        console.log(result.data, result.role);

    })
  }

}
