import { Component, Event, Prop } from '@stencil/core';
import { EventEmitter } from 'events';

@Component({
  tag: 'phone-input',
  styleUrl: 'phone-input.scss',
  shadow: true
})
export class PhoneInputComponent {
  @Prop() phoneNumber: string;

  @Event() numberChange: EventEmitter;
  @Event() inputFocus: EventEmitter;
  @Event() inputBlur: EventEmitter;
  @Event() numberInput: EventEmitter;

  onNumberChange(event) {
    this.numberChange.emit(event.target.value)
  }

  onInputFocus(event) {
    this.inputFocus.emit(event.target.value)
  }

  onInputBlur(event) {
    this.inputBlur.emit(event.target.value)
  }

  onNumberInput(event) {
    this.numberInput.emit(event.target.value)
  }

  render() {
    return <div>
        <input type="number" 
        value={this.phoneNumber}
        onChange={this.onNumberChange.bind(this)} 
        onFocus={this.onInputFocus.bind(this)}  
        onBlur={this.onInputBlur.bind(this)}  
        onInput={this.onNumberInput.bind(this)} />
    </div>;
  }
}
