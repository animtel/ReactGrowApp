import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  static propTypes = {
    //typization of props
    contact: PropTypes.object.isRequired
  };

  constructor(props) {
    //init component
    super(props);
    this.contact = props.contact;
    this.state = {
      showContactInfo: false
    };
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  onShowClick(e) {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.contact;

    //render jsx
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h6>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
