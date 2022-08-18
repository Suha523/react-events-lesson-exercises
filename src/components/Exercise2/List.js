import React, { Component } from "react";
import Contact from "./Contact";

class List extends Component {

  render() {
    return (
      <div>
        {this.props.contact.map((c) => (
          <Contact
            key={c}
            name={c}
            displayConvo={this.props.displayConvo}
            displayConversation={this.props.displayConversation}
          />
        ))}
        
      </div>
    );
  }
}

export default List;
