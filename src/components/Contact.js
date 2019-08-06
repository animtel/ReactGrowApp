import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    //typization of props
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
  };

  constructor(props) {
    //init component
    super(props);
    this.contact = props.contact;
    this.state = {
      showContactInfo: false
    };
  }

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  onShowClick(e) {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {
    const { showContactInfo } = this.state;
    //render jsx
    return (
      <div className="card card-body p-2 mb-3">
        <h6>
          {this.contact.name}{" "}
          <i
            onClick={this.onShowClick.bind(this)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h6>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {this.contact.email}</li>
            <li className="list-group-item">Phone: {this.contact.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
