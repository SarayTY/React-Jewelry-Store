import React, { Component } from "react";
import Filter from "./Filter";
import Products from "./Products";

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      material: "",
      sort: "",
    };
  }

  setSort = (event) => {
    const sort = event.target.value;
    this.setState({ sort });
  };

  // filter lowest or highest
  sortAndFilterProducts = () => {
    const filteredProducts = this.state.material
      ? this.props.products.filter(
          (product) =>
            product.availableProducts.indexOf(this.state.material) >= 0
        )
      : this.props.products;

    return filteredProducts
      .slice()
      .sort((a, b) =>
        this.state.sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : this.state.sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      );
  };

  setFilter = (event) => {
    this.setState({ material: event.target.value });
  };

  // filter material
  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        material: event.target.value,
        products: this.props.products,
      });
    } else {
      this.setState({
        material: event.target.value,
        products: this.props.products.filter(
          (product) =>
            product.availableProducts.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    const products = this.sortAndFilterProducts();
    
    return (
      <>
        <Filter
          count={this.props.length}
          material={this.state.material}
          sort={this.state.sort}
          sortProducts={this.setSort}
          filterProducts={this.filterProducts}
        />
        <Products
          addToCart={this.props.addToCart}
          addFavorite={this.props.addFavorite}
          products={products}
        />
      </>
    );
  }
}

export default ProductPage;
