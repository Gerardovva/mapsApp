import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  public map?: Map;
  public currenrLngLat: LngLat = new LngLat(-96.73537693930155, 17.095446312241393);

  @ViewChild('map') //permite tomar una referencia a un elemento httml
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'el elemento html no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currenrLngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
    /*
    const marketHTml = document.createElement('div');
    marketHTml.innerHTML='Gerardo '

    const marker = new Marker({
      // color: 'red'
      // element:marketHTml
    })
      .setLngLat(this.currenrLngLat)
      .addTo(this.map);*/
  }
}//cierre clase
