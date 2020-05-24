import React from 'react';
import ReactDOM from 'react-dom';
import ObjectItem from './../components/ObjectItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ObjectItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
