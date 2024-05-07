import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2VyYXJkb3ZhcyIsImEiOiJjbHZteWU1c2EwN2hrMmxzNG1oZmFzdDY5In0.ePHCcsnDzQ-LLXvS0wI8Xw'

@Component({
  // selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') //permite tomar una referencia a un elemento httml
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    // if(!this.divMap) throw 'el elemento html no fue encontrado'

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })
  }


}
