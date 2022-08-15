import Form from "./common/form";
import withRouter from "./common/withRouter";
import PageHeaderTitle from "./common/pageHeaderTitle";
import Joi from "joi";
import usersService from "../frontServices/usersService";
import { Navigate } from "react-router-dom";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allows: false } }),
    password: Joi.string().required().min(6),
  };

  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await usersService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }

    return (
      <>
        <div className="container">
          <PageHeaderTitle title="Sign in with your info" />
          <div className="row">
            <div className="col-12">
              <p>Sign in with your account</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} noValidate autoCapitalize="off">
            {this.renderInput({ name: "email", label: "Email", type: "email" })}
            {this.renderInput({
              name: "password",
              label: "Password",
              type: "password",
            })}

            <div className="my-3">{this.renderButton("Sign Up")}</div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SignIn);
