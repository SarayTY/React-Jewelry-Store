import React, { Component } from "react";
import formatCurrency from "../../frontServices/utils";
import "../../css/products.css";

class Products extends Component {

  render() {

    return (
      <>
        <div>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <img src={product.image} alt={product.title} />
                  <p className="product-title">{product.title} </p>
                  <div className="product-price">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="d-flex">
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="product-button"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Products;
