import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import Table, {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import TableSortHeader from './TableSortHeader';

let columnData, shallow, wrapper, requestSortFunction;

beforeEach(() => {
  columnData = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
    { id: 'position', numeric: false, disablePadding: true, label: 'Position' },
    {
      id: 'description',
      numeric: false,
      disablePadding: true,
      label: 'Description'
    }
  ];

  requestSortFunction = jest.fn();
  const order = 'asc';
  const orderBy = 'id';

  shallow = createShallow({ dive: true });
  wrapper = shallow(
    <TableSortHeader
      order={order}
      orderBy={orderBy}
      onRequestSort={requestSortFunction}
      columnData={columnData}
    />
  );
});

it('should map column labels', () => {
  const idCell = wrapper
    .find(TableSortLabel)
    .first()
    .map(x => x.children().text());

  const positionCell = wrapper
    .find(TableSortLabel)
    .at(1)
    .map(x => x.children().text());

  const descriptionCell = wrapper
    .find(TableSortLabel)
    .at(2)
    .map(x => x.children().text());

  expect(idCell[0]).toEqual('Id');
  expect(positionCell[0]).toEqual('Position');
  expect(descriptionCell[0]).toEqual('Description');
});

it('should set id column to active', () => {
  const idLabel = wrapper.find(TableSortLabel).first();
  const positionLabel = wrapper.find(TableSortLabel).at(1);
  const descriptionLabel = wrapper.find(TableSortLabel).at(2);

  expect(idLabel.prop('active')).toEqual(true);
  expect(positionLabel.prop('active')).toEqual(false);
  expect(descriptionLabel.prop('active')).toEqual(false);
});
