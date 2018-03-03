import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TableSortHeader from './TableSortHeader';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 650,
    backgroundColor: theme.palette.background.paper
  },
  table: {

  }
});

class Milestone extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'id',
      data: this.props.milestones.sort((a, b) => (a.id < b.id ? -1 : 1)),
      columnData: [
        { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
        { id: 'position', numeric: false, disablePadding: true, label: 'Position' },
        { id: 'description', numeric: false, disablePadding: true, label: 'Description' },
      ]
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, columnData } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableSortHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort.bind(this)}
            columnData={columnData}
          />
          <TableBody>
            {data.map(x => (
              <TableRow key={x.id}>
                <TableCell numeric>{x.id}</TableCell>
                <TableCell>{x.position}</TableCell>
                <TableCell>{x.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Milestone.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Milestone);