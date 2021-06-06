import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Sam Kolder",
        email: "sam@coldmedia.com",
        phone: "5555-5555-5555",
      },
      {
        id: 2,
        name: "Swarn Suvarna",
        email: "info@dev.com",
        phone: "55545-5555-5555",
      },
      {
        id: 3,
        name: "John doe",
        email: "john@meme.com",
        phone: "5755-5555-5555",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
