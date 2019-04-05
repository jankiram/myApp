import {Component, Directive, Input, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	@ViewChild(IonSlides) slides: IonSlides;
	ionViewDidEnter() {
	this.slides.startAutoplay();
	}
}
