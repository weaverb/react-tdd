import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ProductList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="div">
        {props.products.map(p => (
          <ListItem button key={p.id} onClick={() => props.onProductSelect(p)}>
            <ListItemIcon>
              <i className="material-icons md-36">add_circle</i>
            </ListItemIcon>
            <ListItemText primary={`${p.name} (${p.brand})`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(ProductList);
