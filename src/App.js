import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        { id: 1, name: 'Red widget', brand: 'widget' },
        { id: 2, name: 'Blue widget', brand: 'widget' },
        { id: 3, name: 'Green sprocket', brand: 'sprocket' }
      ]
    };
  }

  handleProductSelect(product) {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Product Store</h1>
        <p>You have selected {this.state.selectedProducts.length} products.</p>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect.bind(this)}
        />
      </div>
    );
  }
}

export default App;
