import { Component, OnInit, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-map-marker',
  template: `
  <agm-map [latitude]="center.lat" [longitude]="center.lng" [zoom]='zoom'>
    <agm-marker   *ngFor="let item of positions" [latitude]="item.lat" [longitude]="item.lng" (markerClick)="markerClick(item)"></agm-marker>
</agm-map>
  `,
  styles: [`
  agm-map {
    height: 600px;
  }`]
})
export class MapMarkerComponent {
  positions: any[] = [];
  zoom: number = 10;
  center: any = {lat: 37.775, lng :-122.434};
  @Input() inputData: any;

  latlng: any = [];
  @Output() outputEmitter: EventEmitter<any> =  new EventEmitter();

  ngOnChanges (changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
        this.latlng = changes['inputData'].currentValue;
        this.onChangeImpl();
        }
    }
    onChangeImpl(){
        this.positions = [];
        let item: any; 
        let isFirst: boolean = true;
        if (this.latlng) {
          this.latlng.forEach( (data: any) => {
            item = {};
            item.id = data.id;
            item.lat = data.lat;
            item.lng = data.lng;
            this.positions.push(item);
            if(isFirst) {
              this.center = item;
              isFirst = false;
            }
  
          });
        }

    }
    markerClick(item: any){
      this.outputEmitter.next(item);
    }
}