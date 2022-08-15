import React from "react";
import Input from "./input";
import Joi from "joi";

class Form extends React.Component {
    validateInput({name, value}) {
        const data = {
            [name]:value,
        };
  
        const schema = Joi.object({
            [name]: this.schema[name],
        });
        const {error} = schema.validate(data);
  
        return error ? error.details[0].message : null;
    }
    
    validateForm() {
        const {
          schema,
          state: { form },
        } = this;
    
        const { error } = Joi.object({ ...schema }).validate(form, {
          abortEarly: false,
        });
    
        if (!error) {
          return null;
        }
    
        const errors = {};
        for (const detail of error.details) {
          errors[detail.path[0]] = detail.message;
        }
    
        return errors;
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = this.validateForm();
        this.setState({ errors });
    
        if (errors) {
          return;
        }
    
        this.doSubmit();
      };
      
  //two way binding , when a change happens in the input
  handleChange = ({ target }) => {
    const { form , errors } = this.state;

    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
      errors: {
        ...errors,
        [target.name]: this.validateInput(target),
    },
    });
  };

  // inputs
  renderInput({ name, label, type = "text" }) {
    const { form , errors } = this.state;

    return ( <Input
             name={name} 
             label={label} 
             type={type} 
             onChange={this.handleChange}
             value={form[name]}
             error={errors?.[name]}
           />
    );
  }
  // form button
  renderButton(label) {
    return <button className="btn" style={{backgroundColor:"rgb(31, 218, 208)"}}>{label}</button>;
  }
}

export default Form;
