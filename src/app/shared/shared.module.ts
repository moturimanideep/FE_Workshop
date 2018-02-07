import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './service/app.interceptor';
import { CommonModule } from '@angular/common';
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { DataLoadService } from "../apex/common/data-load.service";

import { AppService } from "./service/app.service";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppImgUploadComponent } from "./component/app.imgupload.component";
import { AppImgLoadComponent } from "./component/app.imgload.component";
import { FormMessagesComponent } from "./component/form.messages.component";
import { InfiniteListComponent } from './component/infinite.list.component';
import { AppCropImgComponent } from "./component/app.imgcrop.component";
import { AgmCoreModule, GoogleMapsAPIWrapper , MapsAPILoader } from '@agm/core';
import { MapMarkerComponent } from './component/app.map-marker.component';
import { MapDirectionComponent } from './component/app.map-direction.component';
import { MapAuoComplete } from './component/map-autocomplete.component';
import { AgmDirectionModule } from 'agm-direction';
import { SearchBarComponent } from './component/search-bar.component'


import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';

import { 
    MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
    MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatAutocompleteModule,
    MatTooltipModule, MatSnackBarModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { AgmDirectionModule } from 'agm-direction';




@NgModule({
    imports: [
        CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule,
        AgmCoreModule.forRoot({
            libraries: ["places"],
            apiKey: 'AIzaSyCDbesJ93p1qG_td6A9pB8ZgIV8al3SZkM'
          }),
        AgmDirectionModule,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule,  MatStepperModule, MatTabsModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule, MatAutocompleteModule,
        InfiniteScrollModule,
        ImageCropperModule,

    ],
    declarations: [ 
        FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, 
        FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent, InfiniteListComponent, AppCropImgComponent,
        MapMarkerComponent, MapDirectionComponent, MapAuoComplete, MapDirectionComponent,
        SearchBarComponent,
    ],
    exports: [
        CommonModule,FormsModule, ReactiveFormsModule, FlexLayoutModule, 
        FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, 
        FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent,
        MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatRadioModule, MatSelectModule,
        MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, 
        MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatAutocompleteModule, MatExpansionModule,
        MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, 
        MatTooltipModule, MatSnackBarModule, AgmCoreModule,AgmDirectionModule,
        InfiniteListComponent, AppImgLoadComponent, AppCropImgComponent,
         MapMarkerComponent, MapDirectionComponent, MapAuoComplete,
          MapDirectionComponent, SearchBarComponent
    
    ],
    providers: [GoogleMapsAPIWrapper]

 })
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApexService, 
                ReportService, 
                AppService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppInterceptor,
                    multi: true
                },
                DataLoadService,
            ],
        };
    }
}