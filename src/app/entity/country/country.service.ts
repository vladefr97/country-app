import {Injectable} from '@angular/core';
import {Country} from './country';
import {COUNTRIES} from './country-data';

@Injectable()
export class CountryService {

  constructor() {
  }

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getLargestCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }

  getPopulatedCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
  }

  getGDPCountries(): Country[] {
    return COUNTRIES.sort((a, b) => a.gdp - b.gdp).slice(0, 3);
  }

  getCountry(name: string): Country {
    return COUNTRIES.find(country => country.name === name);
  }

}
