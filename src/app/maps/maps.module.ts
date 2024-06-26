import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2VyYXJkb3ZhcyIsImEiOiJjbHZteWU1c2EwN2hrMmxzNG1oZmFzdDY5In0.ePHCcsnDzQ-LLXvS0wI8Xw'


import { MapsRoutingModule } from './maps-routing.module';
import { MimiMapComponent } from './components/mimi-map/mimi-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { PagesComponent } from './pages/pages.component';
import ZoomRangePageComponent from './pages/zoom-range-page/zoom-range-page.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    MimiMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    PagesComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent

  ]
})
export class MapsModule { }
