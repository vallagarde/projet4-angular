import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  markers: any[]=[];
  marker: any;
  asMarker=false;

  @Input()
  markerComp: any = {
    titre: String,
    description:String
  };





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


  click(event: google.maps.MapMouseEvent) {
    console.log(event);
    this.addMarker(event.latLng);
    this.childToParent.emit(this.marker.position);
    this.asMarker=true;

  }


  @Output()
  childToParent = new EventEmitter<any>();

  addMarkers(latlng:  google.maps.LatLng | null) {
    this.markers.push({
      position: {
        lat: latlng?.lat(),
        lng: latlng?.lng(),
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
    })
  }

  addMarker(latlng:  google.maps.LatLng | null) {
    this.marker = {
      position: {
        lat: latlng?.lat(),
        lng: latlng?.lng(),
      },
      label: {
        color: 'black',
        text: this.markerComp.description,
      },
      title: this.markerComp.titre,
    }
  }

  ngOnInit() {

      this.center = {
        lat: 48.78,
        lng: -3,
      }
      this.zoom=7;
  }




}
