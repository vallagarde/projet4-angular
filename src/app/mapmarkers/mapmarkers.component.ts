import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapmarkers',
  templateUrl: './mapmarkers.component.html',
  styleUrls: ['./mapmarkers.component.scss']
})
export class MapmarkersComponent implements OnInit {

  markers: any[]=[];
  marker: any;


  @Input()
  markerComp: any[] = [{
    titre: String,
    description:String,
    lat: Number,
    lng:  Number
  }];




  constructor() { }

  zoom = 7
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 40,
    minZoom: 2,
  }

  ngOnInit(): void {

    this.center = {
      lat: 48.78,
      lng: -3,
    }
    this.zoom=7;
    for (let marker of this.markerComp){
      this.addMarkers(marker);

    }
  }

  voirSeances(){
    for (let marker of this.markerComp){
      this.addMarkers(marker);

    }
  }

  addMarker(markerComp : any) {
    this.marker = {
      position: {
        lat: markerComp.lat,
        lng: markerComp.lng,
      },
      label: {
        color: 'black',
        text: markerComp.titre,
      },
      title: markerComp.description,
    }
  }
  addMarkers(markerComp : any) {
    let coordinates = new google.maps.LatLng(markerComp.lat, markerComp.lng);
    this.markers.push({
      position: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      label: {
        color: 'black',
        text: markerComp.titre,
      },
      title: "markerComp.description",
    })
  }

}
