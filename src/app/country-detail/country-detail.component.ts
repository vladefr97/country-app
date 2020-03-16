import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CountryService} from '../entity/country/country.service';
import {Country} from '../entity/country/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  private country: Country;

  constructor(private route: ActivatedRoute,
              private countryService: CountryService,
              private location: Location) {
  }

  ngOnInit() {
    this.getCountry();
  }

  public getCountry(): void {
    const name: string = this.route.snapshot.paramMap.get('name');
    this.country = this.countryService.getCountry(name);
  }

  public goBack(): void {
    this.location.back();
  }
}
