import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import ProductList from './ProductList';
import { ListItem, ListItemText } from 'material-ui/List';

let mockProducts, shallow, wrapper, productSelectFn;

beforeEach(() => {
  mockProducts = [
    { id: 1, name: 'mock 1', brand: 'mock brand a' },
    { id: 2, name: 'mock 2', brand: 'mock brand b' },
    { id: 3, name: 'mock 3', brand: 'mock brand c' }
  ];

  productSelectFn = jest.fn();
  shallow = createShallow({ dive: true });
  wrapper = shallow(
    <ProductList products={mockProducts} onProductSelect={productSelectFn} />
  );
});

afterEach(() => {
  productSelectFn.mockReset();
});

it('should render a list of products as an unordered list', () => {
  expect(wrapper.find(ListItem).length).toEqual(mockProducts.length);
});

it('should display a product name in each `<li>` element', () => {
  const firstEl = wrapper.find(ListItemText).first();
  expect(firstEl.prop('primary')).toMatch(mockProducts[0].name);
});

it('should display a product brand in each `<li>` element', () => {
  const firstEl = wrapper.find(ListItemText).first();
  expect(firstEl.prop('primary')).toMatch(mockProducts[0].brand);
});

it('should call `props.onProductSelect` when `<li>` is clicked', () => {
  const firstEl = wrapper.find(ListItem).first();
  expect(productSelectFn.mock.calls.length).toEqual(0);
  firstEl.simulate('click');
  expect(productSelectFn.mock.calls.length).toEqual(1);
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});
