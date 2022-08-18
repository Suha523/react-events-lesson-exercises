import React, { Component } from "react";

class Conversation extends Component {
  
  displayConvo = () => {
    this.props.displayConvo(this.props.sender);
  };
  render() {
    return (
      <div>
        {this.props.convo.map((c, key) => (
          <div key={key}>
            <span className="sender">
              {c.sender === "other" ? this.props.sender : "Me"}
            </span>
            : {c.text}
          </div>
        ))}
        <button onClick={this.displayConvo}>Back</button>
      </div>
    );
  }
}

export default Conversation;
