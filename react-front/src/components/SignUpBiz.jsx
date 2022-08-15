import PageHeaderTitle from "./common/pageHeaderTitle";
import Form from "./common/form";
import Joi from "joi";
import withRouter from "./common/withRouter";
import usersService from "../frontServices/usersService";
import { Navigate } from "react-router-dom";

class SignUpBiz extends Form {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
    },
  };
  schema = {
    name: Joi.string().required().min(2),
    email: Joi.string()
      .required()
      .email({ tlds: { allows: false } }),
    password: Joi.string().required().min(6),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await usersService.createUser(body);
      await usersService.login(form.email, form.password);
      window.location = "/creatBizCard";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
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
          <PageHeaderTitle title="business account" />
          <div className="row">
            <div className="col-12">
              <p>Open a new account and enjoy our exclusivity</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} noValidate autoCapitalize="off">
            {this.renderInput({ name: "name", label: "Name" })}
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

export default withRouter(SignUpBiz);
