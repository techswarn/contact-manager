import React, { Component } from "react";
import { Consumer } from "./../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card card-body mb-3">
                <h4>
                  {name}{" "}
                  <i
                    onClick={(e) => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
                      });
                    }}
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                </h4>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
