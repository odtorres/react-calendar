import React, { Component } from 'react';
import './EventList.css';
//import UtilDate from './UtilDate';
import EventHandler from './EventHandler';
import EventForm from './EventForm';

class EventList extends Component {

    constructor() {
        super();
        this.state = {
            visible: true,
            refresh: false
        };
        this.done = this.done.bind(this);
        this.showEventForm = this.showEventForm.bind(this);
        this.showEventList = this.showEventList.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
    }

    done() {
        this.props.done();
    }

    showEventForm() {
        this.setState({
            visible: false
        });
    }

    showEventList() {
        this.setState({
            visible: true
        });
    }

    addEvent(name, details, from, to) {
        this.props.addEvent(name, details, from, to);
    }

    removeEvent(e) {
        this.props.removeEvent(Object.values(e.target)[0]._hostNode.id);
        this.setState({ refresh: true });
    }

    render() {
        if (this.state.visible) {
            if (EventHandler.events[this.props.events] && EventHandler.events[this.props.events].dayEvents.length !== 0) {
                return (
                    <div className="eventList">
                        <ul>
                            {EventHandler.events[this.props.events].dayEvents.map(
                                (e, i) => <li key={i}>{"(" + e.from + "-" + e.to + "): " + e.name} <button onClick={this.removeEvent} id={i}>X</button></li>
                            )}
                        </ul>
                        <div className="action">
                            <button onClick={this.done} >Done</button>
                            <button onClick={this.showEventForm} >Add event</button>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="eventList">
                        <div>
                            No events for this day
                        </div>
                        <div className="action">
                            <button onClick={this.done} >Done</button>
                            <button onClick={this.showEventForm} >Add event</button>
                        </div>
                    </div>
                );
            }
        }
        return (
            <EventForm done={this.showEventList} addEvent={this.addEvent}></EventForm>
        );

    }
}

export default EventList;