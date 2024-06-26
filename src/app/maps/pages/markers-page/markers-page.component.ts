import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}
interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  public map?: Map;
  public currenrLngLat: LngLat = new LngLat(-96.7242564874746, 17.060867839238497);

  @ViewChild('map') //permite tomar una referencia a un elemento httml
  public divMap?: ElementRef;

  public markers: MarkerAndColor[] = []

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'el elemento html no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currenrLngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    this.readFromLocalstorage();
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

  createMarket() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter()
    this.addMarket(lngLat, color);
  }

  addMarket(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true //para decir que se va apoder mover el cursor 
    }).setLngLat(lngLat)
      .addTo(this.map);


    this.markers.push({
      color: color,
      marker: marker
    });

    this.saveToLocalstorage();//se llama al local storage

    marker.on('dragend',()=> {
     this.saveToLocalstorage();
      
    })
  }

  deletemarker(index: number) {
    this.markers[index].marker.remove(); //elimina del mapa 
    this.markers.splice(index, 1) // se elimina el marcador del areglo
  }


  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    })
  }


  saveToLocalstorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });
    localStorage.setItem('plainMarkes', JSON.stringify(plainMarkers));
  }

  readFromLocalstorage() {
    const plainMarkersString = localStorage.getItem('plainMarkes') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarket(coords,color)
    })

  }

}//cierre clase
