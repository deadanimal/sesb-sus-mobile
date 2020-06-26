import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { faPlug } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.page.html',
  styleUrls: ['./outages.page.scss'],
})
export class OutagesPage implements OnInit {

  // Map
  map: L.Map
  leafletConfig = {
    layers: [
      L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains:['mt0','mt1','mt2','mt3']
        }
      )
    ],
    zoom: 14,
    center: L.latLng(5.9788, 116.0753)
  };

  // Icon
  faPlug = faPlug
  faIconStyle = {
    'color': 'Tomato'
  }

  constructor() { }

  ngOnInit() {
  }

  onMapReady(map: L.Map) {
    this.map = map
    setTimeout(
      () => {
        this.map.invalidateSize()
      }, 1000
    );
    // map.invalidateSize(true);
  }

  ionViewDidEnter() {
    setTimeout(
      () => {
        this.map.invalidateSize()
      }, 1000
    );
  }

}
