import React, { Component } from "react";

class CountApp extends Component {
  constructor(props) {
    super(props);

    this.state = {count: this.props.count};

    this.onBtnIncrease = this.onBtnIncrease.bind(this);
    this.onBtnDecrease = this.onBtnDecrease.bind(this);
  }

  render() {
    return(
      <div>
        <button className="btn" onClick={this.onBtnDecrease}>-</button>
        <span className="text">{this.state.count}</span>
        <button className="btn" onClick={this.onBtnIncrease}>+</button>
      </div>
    );
  }

  onBtnIncrease(){
    if (this.state.count < this.props.maxCount) {
      let count = this.state.count + 1;
      this.props.onCountProductsChange(count);
      this.setState({count});
    }
  }

  onBtnDecrease(){
    if (this.state.count > 0) {
      let count = this.state.count - 1;
      this.props.onCountProductsChange(count);
      this.setState({count});
    }
  }
}

export default CountApp;