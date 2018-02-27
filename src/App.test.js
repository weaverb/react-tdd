import React from 'react';
import ReactDOM from 'react-dom';
import { createMount } from 'material-ui/test-utils';
import { ListItem } from 'material-ui/List';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should add product when passed to `handleProductSelect`', () => {
  const div = document.createElement('div');
  const mount = createMount();
  const app = mount(<App />);

  expect(app.state('selectedProducts').length).toEqual(0);

  const li = app.find(ListItem).first();
  li.simulate('click');

  expect(app.state('selectedProducts').length).toEqual(1);
});
