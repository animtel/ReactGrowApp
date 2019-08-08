import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { editContact, getContact } from "../../actions/contactActions";
import PropTypes from "prop-types";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const { id } = this.props.match.params;

    const updContact = {
      id: id,
      name: name,
      email: email,
      phone: phone
    };

    this.props.editContact(updContact);

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              placeholder="Enter email..."
              value={email}
              type="email"
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter phone..."
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  {
    getContact,
    editContact
  }
)(EditContact);
