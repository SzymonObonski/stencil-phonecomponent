import { Component, Prop, Listen, Method } from '@stencil/core';

@Component({
  tag: 'phone-field',
  styleUrl: 'phone-field.scss',
  shadow: true
})
export class PhoneFieldComponent {
  @Prop() phoneCode: string;
  @Prop() phoneNumber: string;

  @Listen('countrySelected')
  @Listen('numberChange')

  @Method()
  getFullValue(): Promise<string> {
    return Promise.resolve(`${this.phoneCode} ${this.phoneNumber}`);
  }

  countrySelectedHandler(event: CustomEvent): void {
    this.phoneCode = event.detail;
  }

  numberChangeHandler(event: CustomEvent): void {
    this.phoneNumber = event.detail;
  } 

  render() { 
    return <div class="form-field">
    <div class="form-field__select">
      <country-code phone-code={this.phoneCode}></country-code>
    </div>
    <div class="form-field__input"> 
      <phone-input phone-number={this.phoneNumber}></phone-input>
    </div>
  </div>;
  }
}
