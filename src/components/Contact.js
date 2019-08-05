import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    //typization of props
    contact: PropTypes.object.isRequired
  };

  constructor(props) {
    //init component
    super(props);
    this.contact = props.contact;
    this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick() {}

  render() {
    //render jsx
    return (
      <div className="card card-body mb-3">
        <h4>
          {this.contact.name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {this.contact.email}</li>
          <li className="list-group-item">Phone: {this.contact.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
