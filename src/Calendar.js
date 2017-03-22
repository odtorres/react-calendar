import React, { Component } from 'react';
import './Calendar.css';
import UtilDate from './UtilDate';
//import EventHandler from './EventHandler';
import EventList from './EventList';

class Calendar extends Component {

  constructor() {
    super();
    let now = new Date();
    this.state = {
      currentYear: now.getFullYear(),
      currentMonth: now.getMonth(),
      visible: true
    };
    this.monthBefore = this.monthBefore.bind(this);
    this.monthAfter = this.monthAfter.bind(this);
    this.setCurrentMonthDate = this.setCurrentMonthDate.bind(this);
    this.eventClickHandle = this.eventClickHandle.bind(this);
  }

  setCurrentMonthDate(plus) {
    let month = (this.state.currentMonth + plus) > 11 ? 0 :
      (this.state.currentMonth + plus) < 0 ? 11 : (this.state.currentMonth + plus);
    let year = (this.state.currentMonth + plus) > 11 ? this.state.currentYear + plus :
      (this.state.currentMonth + plus) < 0 ? this.state.currentYear + plus : this.state.currentYear;
    let date = new Date(year, month);
    this.setState({
      currentMonth: date.getMonth(),
      currentYear: date.getFullYear()
    });
  }

  monthAfter() {
    this.setCurrentMonthDate(1);
  }

  monthBefore() {
    this.setCurrentMonthDate(-1);
  }

  eventClickHandle(e) {
    console.debug(this.state.currentYear);
    console.debug(this.state.currentMonth + 1);
    console.debug(Object.values(e.target)[0]._hostNode.innerText);
    this.setState({
      visible:false
    });
  }

  render() {
    let days = UtilDate.daysInMonth(this.state.currentYear, this.state.currentMonth);
    let firstDay = UtilDate.getFirstDay(this.state.currentYear, this.state.currentMonth);
    let day = 0;
    if (this.state.visible){ 
      return (
        <div className="calendar"> 
          <div className="year">
            <div >{this.state.currentYear}</div>
          </div>
          <div className="action-panel">
            <div onClick={this.monthBefore} >{'<'}</div>
            <div className="wide">{UtilDate.getMonthName(this.state.currentMonth)}</div>
            <div onClick={this.monthAfter} >{'>'}</div>
          </div>

          <div className="days">
            {
              UtilDate.dayName.map((e, i) => {
                return <div key={"day" + e + "-" + i}>{e}</div>
              })
            }

            {
              Array.apply(null, Array(52)).map((e, i) => {
                if (firstDay > i)
                  return <div key={i + " "}> {"  "} </div>
                if (days <= day)
                  return <div key={i + " "}> {"  "} </div>
                return <div key={++day} className="validDays" onClick={this.eventClickHandle}> {day} </div>
              })
            }
          </div>          
        </div>
      );
    }else{
      return (
        <EventList></EventList>
      );
    }
  }
}

export default Calendar;