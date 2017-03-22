import React, { Component } from 'react';
//import './EventList.css';
//import UtilDate from './UtilDate';
import EventHandler from './EventHandler';

class EventList extends Component {

  /*constructor() {
    super();
    let now = new Date();
    
  }*/
 
  render() {
   if(EventHandler.events.length!=0)
    return (
      <div className="event-list">
        {EventHandler.events.map(
            e=><div>e.name</div>
        )}
      </div>
    );

    return (
      <div className="event-list">
        No events for this day
      </div>
    );
  }
}

export default EventList;