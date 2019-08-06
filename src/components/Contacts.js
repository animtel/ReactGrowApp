import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Daniel Ko",
          email: "danielko@gamil.com",
          phone: "+380999999999"
        },
        {
          id: 2,
          name: "Henry Johnson",
          email: "henryjonhson@gamil.com",
          phone: "555-555-5555"
        },
        {
          id: 3,
          name: "Karen Williams",
          email: "rarenwi@gamil.com",
          phone: "333-333-3333"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
