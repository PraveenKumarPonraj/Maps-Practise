import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityRadiusComponent } from './city-radius/city-radius.component';
import { LatLngComponent } from './lat-lng/lat-lng.component';


const routes: Routes = [
  { path :'', component:LatLngComponent},
  { path :'city-radius', component:CityRadiusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
