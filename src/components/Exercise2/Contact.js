import React, { Component } from 'react';

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div >
        <span>{this.props.name}: </span>
        <button onClick={this.displayConvo}>Display convo</button>
      </div>
    );
  }
}

export default Contact;
