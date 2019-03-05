import { Component, Prop, Event } from '@stencil/core';
import {Country} from './country.interface';
import { EventEmitter } from 'events';
import {COUNTRY_CODES} from '../../utils/country-codes';

@Component({
  tag: 'country-code',
  styleUrl: 'country-code.scss',
  shadow: true
})
export class CountryCodeComponent {
  @Prop() phoneCode: string;

  @Event() countrySelected: EventEmitter;

  countryCodes: Country[] = COUNTRY_CODES;

  onCountrySelected(event) {
    this.countrySelected.emit(event.target.value)
  }

  render() {
    return <div>
          <select onInput={(event) => this.onCountrySelected(event)}>
            {
              this.countryCodes.map( (country: Country) => 
              <option value={country.dial_code}  selected={country.dial_code === this.phoneCode}>{country.name} {country.dial_code}</option>
            )
            }
          </select>
    </div>;
  }
}
