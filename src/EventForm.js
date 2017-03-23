import React, { Component } from 'react';
import './EventForm.css';
import UtilDate from './UtilDate';
//import EventHandler from './EventHandler';

class EventForm extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      details: "",
      from: UtilDate.dayTime[0],
      to: UtilDate.dayTime[0]
    };
    this.done = this.done.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.cancel = this.cancel.bind(this);

    this.from = 0;
  }

  cancel() {
    this.props.done();
  }

  handleFrom(e) {
    this.from = e.target.selectedIndex
    this.setState({ from: e.target.value });
    this.setState({ to: e.target.value });
  }

  handleTo(e) {
    this.setState({ to: e.target.value });
  }

  handleName(e) {
    if(e.target.value.length<=15)
      this.setState({ name: e.target.value });
  }

  handleDetails(e) {
    this.setState({ details: e.target.value });
  }

  done() {    
    this.props.addEvent(this.state.name, this.state.details,this.state.from,this.state.to);
    this.props.done();
  }

  render() {
    const details = this.state.details;
    const name = this.state.name;
    const from = this.state.from;
    const to = this.state.to;

    return (
      <div className="eventForm">
        <div>
        <label> Name : </label>
        <input placeholder="EventName" value={name} onChange={this.handleName}></input>
        </div>
        <div>
        <label> From : </label>
        <select value={from} onChange={this.handleFrom}>
          {UtilDate.dayTime.map((e, i) => <option key={i}>{e}</option>)}
        </select>
        </div>
        <div>
        <label> To : </label>
        <select value={to} onChange={this.handleTo}>
          {UtilDate.dayTime.slice(this.from,UtilDate.dayTime.length).map((e, i) =>  { return <option key={i}>{e}</option>} )}
        </select>
        </div>
        <div>
        <label> Details : </label>
        <textarea placeholder="Details" value={details} onChange={this.handleDetails}></textarea>
        </div>
        <button onClick={this.done} >Done</button>
        <button onClick={this.cancel} >Cancel</button>
      </div>
    );
  }
}

export default EventForm;