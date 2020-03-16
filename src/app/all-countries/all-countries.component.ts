import {Component, OnInit} from '@angular/core';
import {CountryService} from '../entity/country/country.service';
import {Country} from "../entity/country/country";

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  private countries: Country[] = [];

  constructor(private countryService: CountryService) {

  }

  ngOnInit() {
    this.getCountries();
  }


  private getCountries(): void {
    this.countries = this.countryService.getCountries();

  }
}
