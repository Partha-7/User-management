import React from "react";
import Form from "./Form";
import Joi from "joi-browser";
import axios from "axios";

class LoginForm extends Form {
  state = {
    data: {
      fist_name: "",
      last_name: "",
      username: "",
      email: "",
      pwd: "",
    },
    errors: {},
  };

  schema = {
    fist_name: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required()
      .label("First Name"),
    last_name: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required()
      .label("Last Name"),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required()
      .label("User Name"),
    email: Joi.string().email().required().label("Email"),
    pwd: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required()
      .label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    axios({
      method: "post",
      url: `${"http://3.6.93.159:7883/machstatz/add_new_user"}`,
      data: this.state.data,
      crossDomain: true,
    })
      .then(function (response) {
        document.querySelector(".close").click();
        window.location.reload();
      })
      .catch(function (error) {
        throw new Error(error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("text", "fist_name", "First Name", "")}
        {this.renderInput("text", "last_name", "Last Name", "")}
        {this.renderInput("text", "username", "User Name", "")}
        {this.renderInput("email", "email", "Email Address", "")}
        {this.renderInput("password", "pwd", "Password", "")}
        <div className="save_cancel">
          <button onClick={this.props.handleClose} className="cancel_btn">
            {" "}
            Cancel{" "}
          </button>
          {this.renderSubmitButton("Add", "submit", "btn---success")}
        </div>
      </form>
    );
  }
}

export default LoginForm;
