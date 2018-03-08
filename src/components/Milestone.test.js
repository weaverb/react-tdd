import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from 'material-ui/Table';
import Milestone from './Milestone';
import TableSortHeader from './TableSortHeader';

let mockMilestones, shallow, wrapper;

beforeEach(() => {
  mockMilestones = [
    {
      id: 1,
      position: 'Information Technologist',
      description: 'Network administration, sripting, light development'
    },
    {
      id: 2,
      position: 'Programmer',
      description: 'Developed CRM custom solutions'
    },
    {
      id: 3,
      position: 'Business Analyst',
      description: 'supported agile teams'
    },
    {
      id: 4,
      position: 'Programmer/ Analyst',
      description: 'Cloud development and devops'
    }
  ];

  shallow = createShallow({ dive: true });
  wrapper = shallow(<Milestone milestones={mockMilestones} />);
});

it('should render the list of milestones as a table', () => {
  expect(wrapper.find(TableBody).find(TableRow).length).toEqual(
    mockMilestones.length
  );
});

it('should render the id in the first cell', () => {
  const firstRow = wrapper
    .find(TableBody)
    .find(TableRow)
    .first()
    .find(TableCell)
    .map(x => x.children().text());
  expect(firstRow[0]).toEqual('1');
});

it('should render the position in the second cell', () => {
  const firstRow = wrapper
    .find(TableBody)
    .find(TableRow)
    .first()
    .find(TableCell)
    .map(x => x.children().text());
  expect(firstRow[1]).toEqual('Information Technologist');
});

it('should render the description in the third cell', () => {
  const firstRow = wrapper
    .find(TableBody)
    .find(TableRow)
    .at(2)
    .find(TableCell)
    .map(x => x.children().text());
  expect(firstRow[2]).toEqual('supported agile teams');
});

// it('xx', () => {
//   const firstRow = wrapper.find(TableSortHeader);

//   console.log(wrapper.props());

//   wrapper.props().handleRequestSort(null, 'id');

//   console.log('id is: ', wrapper.state().data[0].id);
// });
