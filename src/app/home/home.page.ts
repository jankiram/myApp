import {Component, Directive, Input, ViewChild} from '@angular/core';
import { Slides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	@ViewChild('mySlider', { read: Slides }) slides: Slides;
	ionViewDidEnter() {
	this.slides.startAutoplay();
	}
}
