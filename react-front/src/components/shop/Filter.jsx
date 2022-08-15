import React, { Component } from "react";
import "../../css/filter.css";

export default class Filter extends Component {
  
  render(
  ) {
    return (
      // filter price range & products size
      <div className="filter">
        <div className="filter-result">{this.props.count}Products</div>
        <div className="filter-sort">
        {" "} Price
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>ALL</option>
            <option value="lowest">Low To High</option>
            <option value="highest">High To Low</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select value={this.props.material} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="White Gold">White Gold</option>
            <option value="Diamond">Diamond</option>
            <option value="Goldfield">Goldfield</option>
            <option value="Earings">Earings</option>
            <option value="Necklace">Necklace</option>
            <option value="Rings">Rings</option>
          </select>
        </div>
      </div>
    );
  }
}
