import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-lat-lng',
  templateUrl: './lat-lng.component.html',
  styleUrls: ['./lat-lng.component.css']
})
export class LatLngComponent implements OnInit{
  title = 'Latitude and Longitude';
   lat : number;
   lng : number;
   zoom:number;
  

  latlngForm = new FormGroup({
  lat : new FormControl(' '),
  lng : new FormControl(' '),
 });

//  latitude = this.latlngForm.value[0];
//  longitude = this.latlngForm.value[1];
 
  // lat = 13.041456;
  // lng = 80.252014;
  ngOnInit(): void {
    this.setCurrentLocation();
    
  }
  
  private setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;

      });
    }
  }

  onSubmit(){
    // this.lat = this.latlngForm.value;
    // this.lng = this.latlngForm.value;
    console.warn(this.latlngForm.value);
  } 

}
