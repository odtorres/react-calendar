import React from 'react';
import ReactDOM from 'react-dom';
import EventForm from '../EventForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventForm />, div);
});