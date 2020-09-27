/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { createPost } from "../actions/actions";

const required = (value) => (value ? undefined : "Required");
const plate = (value) =>
  value && !/^[A-Z0-9]+$/.test(value) ? "Invalid plate number" : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control"
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createPost(this.props.garage, values, () => {
      this.props.history.push(`/${this.props.garage}`); // Navigate after submit return post;
    });
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="new-car">
        <h3>New car</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            validate={required}
            component={renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            validate={required}
            component={renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            validate={required}
            component={renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            validate={[required, plate]}
            component={renderField}
          />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Add Car
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    garage: reduxState.garage,
  };
}

export default reduxForm({ form: "carsNewForm" })(
  connect(mapReduxStateToProps, mapDispatchToProps)(CarsNew)
);
