import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild , Input , Output ,EventEmitter, SimpleChange} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'map-autocomplate',
  styles: [`
    agm-map {
       height: 300px;
     }
  `],
  template: `
    <div class="container">
      <div class="form-group">
        <input style="width: 100% ; height:44px;border:none;" 
          placeholder="search for location" 
          autocorrect="off" 
          autocapitalize="off" 
          spellcheck="off" 
          type="text"  
          #search 
          [formControl]="searchControl" class="padding" >
      </div>
      <agm-map [latitude]="latitude" [longitude]="longitude" [scrollwheel]="false" [zoom]="zoom" (mapClick)="placeMarker($event)">
        <agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>
      </agm-map>
    </div>
  `
})
export class MapAuoComplete implements OnInit {

  public searchControl: FormControl;
  public zoom: number;
  latitude:number = 17.4420748;
  longitude:number = 78.4323058;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  @Input() inputData: any;
  @Output()
  outputEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor( private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) {
  }
  
  ngOnInit() {
    this.zoom = 12;
    this.searchControl = new FormControl();
    //this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {
      setTimeout( ()=> {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });

        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: any = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
            let obj = {lat: this.latitude, lng: this.longitude} ;
            this.outputEvent.emit(obj);
          });
        });
      }, 10)


    });
  }
  
  ngOnChanges (changes: { [key: string]: SimpleChange }) {
    if (changes.hasOwnProperty('inputData')) {
        let latlng = changes['inputData'].currentValue;
        if(latlng && latlng.lat && latlng.lng){
          if(typeof(latlng.lat) == 'string'){
            this.latitude = Number(latlng.lat);
            this.longitude = Number(latlng.lng);
          } else {
            this.latitude = latlng.lat;
            this.longitude = latlng.lng;
          }

        } else {
         // this.latitude = 15.7719411;
          //this.longitude = 77.4722913;
         // this.setCurrentPosition();
        }
    }
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  placeMarker($event){
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    let obj = {lat: this.latitude, lng: this.longitude} ;
    this.outputEvent.emit(obj);
  }
}