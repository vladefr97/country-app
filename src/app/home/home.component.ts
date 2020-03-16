import {Component, OnInit} from '@angular/core';
import {CountryService} from '../entity/country/country.service';
import {Country} from '../entity/country/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public populatedCountries: Country[] = [];
  public largestCountries: Country[] = [];
  public gdpCountries: Country[] = [];

  constructor(private countryService: CountryService) {
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGDPCountries();
  }

  ngOnInit() {
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries();
    console.log('Популяция' + this.populatedCountries);
  }

  setLargestCountries(): void {
    this.largestCountries = this.countryService.getLargestCountries();
  }

  setGDPCountries(): void {
    this.gdpCountries = this.countryService.getGDPCountries();
  }
}
