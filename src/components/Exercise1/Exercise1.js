import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Brightwell_Blueberry_1_650x.jpg?v=1619044035",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
      ],
      currentImg: 0,
    };
  }
  shiftImageBack = () => {
    if (this.state.currentImg >= 0) {
      this.setState({
        currentImg: this.state.currentImg - 1,
      });
    }
  };
  shiftImageForward = () => {
    if (this.state.currentImg < this.state.images.length) {
      this.setState({
        currentImg: this.state.currentImg + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <button className="back" onClick={this.shiftImageBack}>
          Back
        </button>
        <img
          src={this.state.images[this.state.currentImg]}
          alt="img"
          width="300px"
          height="200px"
        />
        <button className="forward" onClick={this.shiftImageForward}>
          Forward
        </button>
      </div>
    );
  }
}

export default Exercise1;
