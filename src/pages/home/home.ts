import { Component } from '@angular/core';
import { Flashlight } from "@ionic-native/flashlight";
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean;

  constructor(private platform:Platform, private flashlight: Flashlight) {
    this.platform.ready().then(()=>{
      this.updateFlashlightStatus();
    });
  }

  switchOn(){
    this.flashlight.switchOn();
  }

  switchOff(){
    this.flashlight.switchOff();
    this.updateFlashlightStatus();
  }

  toggle(){
    this.flashlight.toggle();
    this.updateFlashlightStatus();
  }

  updateFlashlightStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }

}
