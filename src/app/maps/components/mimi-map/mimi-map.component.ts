import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mimi-map',
  templateUrl: './mimi-map.component.html',
  styleUrls: ['./mimi-map.component.css']
})
export class MimiMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild('map') public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw "LngLat can´t bew null"
    if (!this.lngLat) throw "LngLat can´t bew null"
    //mapa
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });
    //market

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map)
  }



}
