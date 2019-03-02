import React, { Component } from "react";
import "./AddHK.css";
// import axios from "axios";

class AddHK extends Component {
  state = {
    id: 0,
    name: "",
    gender: "",
    age: "",
    mobile: "",
    email: "",
    address: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlerSubmit = async e => {
    e.preventDefault();
    // Update Database from here
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="AddUser-Wrapper">
          <h1>Add Home Kitchen:</h1>
          <form onSubmit={this.handlerSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="For example: Rajiv Ipsoo"
              name="name"
              onChange={this.onChangeHandler}
              ref="name"
              className="Add-User-Input"
              required
              minLength="3"
              maxLength="33"
              id="name"
            />
            <label htmlFor="gender">
              Gender: <b>(must be Male or Female)</b>
            </label>
            <input
              type="text"
              placeholder="Male or Female"
              name="gender"
              onChange={this.onChangeHandler}
              ref="gender"
              className="Add-User-Input"
              required
              minLength="3"
              maxLength="6"
              id="gender"
            />
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              placeholder="0 to 120"
              name="age"
              min="1"
              max="120"
              onChange={this.onChangeHandler}
              ref="age"
              className="Add-User-Input"
              required
              id="age"
            />
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              placeholder="ipsoo.raj@nik.com"
              name="email"
              minLength="5"
              maxLength="120"
              onChange={this.onChangeHandler}
              ref="email"
              className="Add-User-Input"
              required
              id="email"
            />
            <label htmlFor="mobile">Mobile Number: </label>
            <input
              type="number"
              placeholder="ipsoo.raj@nik.com"
              name="mobile"
              minLength="10"
              maxLength="10"
              onChange={this.onChangeHandler}
              ref="mobile"
              className="Add-User-Input"
              required
              id="mobile"
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              placeholder="ipsoo.raj@nik.com"
              name="address"
              minLength="5"
              maxLength="120"
              onChange={this.onChangeHandler}
              ref="address"
              className="Add-User-Input"
              required
              id="address"
            />
            <button type="submit" className="Add-User-Submit">
              Submit
            </button>
            <button type="reset" className="Add-User-Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddHK;
