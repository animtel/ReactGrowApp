import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  static propTypes = {
    //typization of props
    contact: PropTypes.object.isRequired
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
  };

  onShowClick(e) {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contact;
    //render jsx
    return (
      <div className="card card-body p-2 mb-3">
        <h6>
          {name}{" "}
          <i
            onClick={this.onShowClick.bind(this)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h6>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
