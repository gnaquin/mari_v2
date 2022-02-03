import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  contactButton() {
    console.log('contact button clicked');
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdWPif5D-Ige00RHWZ4w2t9YB-i9azPhQu17xgf--Ov4q8DAg/viewform?usp=sf_link';
  }

  calendarButton() {
    console.log('calendar button clicked');
    window.location.href = 'http://localhost:8100/calendar';
  };

  donateButton() {
    console.log('donate button clicked');
  };

  registerButton() {
    console.log('register button clicked');
  };

}
