import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Milestone from './components/Milestone';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [
        { id: 1, name: 'Red widget', brand: 'widget' },
        { id: 2, name: 'Blue widget', brand: 'widget' },
        { id: 3, name: 'Green sprocket', brand: 'sprocket' }
      ],
      milestones: [
        { id: 1, position: 'Information Technologist', description: 'Network administration, sripting, light development' },
        { id: 2, position: 'Programmer', description: 'Developed CRM custom solutions' },
        { id: 3, position: 'Business Analyst', description: 'supported agile teams' },
        { id: 4, position: 'Programmer/ Analyst', description: 'Cloud development and devops' }
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
        <Milestone milestones={this.state.milestones} />
      </div>
    );
  }
}

export default App;
