import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {AllCountriesComponent} from './all-countries/all-countries.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:name', component: CountryDetailComponent},
  {path: 'all-countries', component: AllCountriesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
