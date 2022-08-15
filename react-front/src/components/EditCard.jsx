import Form from "./common/form";
import PageHeaderTitle from "./common/pageHeaderTitle";
import Joi from "joi";
import { toast } from "react-toastify";
import cardService from "../frontServices/cardServices";
import withRouter from "./common/withRouter";
import "../css/editCard.css";

class EditCard extends Form {
  state = {
    form: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required().label("Name"),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required()
      .label("Description"),
    bizAddress: Joi.string().min(2).max(400).required().label("Address"),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/)
      .label("Phone"),
    bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
  };

  mapToViewModel({
    _id,
    bizName,
    bizDescription,
    bizAddress,
    bizPhone,
    bizImage,
  }) {
    return {
      _id,
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    };
  }

  async componentDidMount() {
    const cardId = this.props.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ form: this.mapToViewModel(data) });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.navigate("/myCards");
  };

  async doSubmit() {
    try {
      await cardService.editCard(this.state.form);
      toast("Card is updated");
      this.props.navigate("/myCards");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <PageHeaderTitle title="Edit your details" />
        <div className="row">
          <div className="col-12">
            <h5>Update Your Card</h5>
          </div>
        </div>

        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
        >
          {this.renderInput({ name: "bizName", label: "Name" })}
          {this.renderInput({ name: "bizDescription", label: "description" })}
          {this.renderInput({ name: "bizAddress", label: "Address" })}
          {this.renderInput({ name: "bizPhone", label: "Phone" })}
          {this.renderInput({ name: "bizImage", label: "Image" })}

        
            
            <div className="btn mt-2"> {this.renderButton("Save Changes")}</div>
         
            <button onClick={this.handleCancel} className="btn btn-cancel mt-2">
              Cancel
            </button>
    
        </form>
      </div>
    );
  }
}

export default withRouter(EditCard);
