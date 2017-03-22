import React, { Component } from 'react';
import './EventForm.css';
import UtilDate from './UtilDate';

class EventForm extends Component {

  constructor() {
    super();
    let now = new Date();
    
  }
 
  render() {
   
    return (
      <div>
        <label> Event Name : </label><input placeholder="EventName"></input>
        <label> Time : </label><div>{this.props.time}</div>
        <label> Details : </label><textarea placeholder="Details"></textarea>

      </div>
    );
  }
}

export default EventForm;