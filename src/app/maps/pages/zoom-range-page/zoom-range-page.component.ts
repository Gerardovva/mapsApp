import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export default class ZoomRangePageComponent implements AfterViewInit {

  public zoom: number = 10;
  public map?: Map;

  @ViewChild('map') //permite tomar una referencia a un elemento httml
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    console.log(this.divMap);

    if (!this.divMap) throw 'el elemento html no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    })
    this.mapListeners();
  }

  mapListeners() {
    if (!this.map) throw ' mapa no inizializado';
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;

      this.map!.zoomTo(18);
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }


  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom= Number(value);
    this.map?.zoomTo(this.zoom)

  }

}
