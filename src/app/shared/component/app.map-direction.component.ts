import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
declare var google: any;
@Component({
  selector: 'app-map-direction',
  template: `
      <agm-map [latitude]="center.lat" [longitude]="center.klng">
        <agm-direction *ngIf="dir" [origin]="dir.origin" [destination]="dir.destination" travelMode='DRIVING'>
        </agm-direction>
      </agm-map>
  `,
  styles: [`
  agm-map {
    height: 400px;
    width:auto;
  }
  @media only screen and (max-width: 500px){
    agm-map{
      height:200px;
      width:200px;
    }`]
})
export class MapDirectionComponent {
  dir: any[] = [];
  zoom: number = 10;
  center: any = { lat: 37.775, lng: -122.434 };

  @Input() inputData: any[];
  constructor(public mapsApiLoader: MapsAPILoader){
    this.mapsApiLoader.load().then(() => {
      console.log('google script loaded');
       new google.maps.Geocoder();
    });
  }
  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
      if(this.inputData) {
        this.onChangeImpl();
      }
     
    }
  }
  onChangeImpl() {
    this.dir = [];
    let dir: any = {
      origin: null,
      destination: null,
      waypoints: []
    };
    let isFirst: boolean = true;
    if (this.inputData) {
      if (this.inputData && this.inputData.length > 0) {
        let length = this.inputData.length;

        this.center.lat = this.inputData[0].lat;
        this.center.lng = this.inputData[length - 1].lng;

        dir.origin = { lat: this.inputData[0].lat, lng: this.inputData[0].lng };
        dir.destination = { lat: this.inputData[length - 1].lat, lng: this.inputData[length - 1].lng };
        if (length > 2) {
          for (var i = 0; i < length; i++) {
            dir.waypoints.push({ lat: this.inputData[i].lat, lng: this.inputData[i].lng });
          }
        } else {
          delete dir.waypoints;
        }
        this.dir = dir;
      }
    }

  }
}