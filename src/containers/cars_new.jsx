/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { createCar } from "../actions/actions";

// Components
import CarsLeft from "../components/cars_left";

const required = value => (value ? undefined : "This field is required");
const plate = value =>
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
  onSubmit = values => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push("/"); // Navigate after submit return post;
    });
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="cars-new">
        <CarsLeft buttonPath="/" buttonText="Back to list" />
        <div className="new-right">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              validate={required}
              component={renderField}
              placeholder="Tesla"
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
            <div className="field-button">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createCar }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    garage: reduxState.garage,
  };
}

export default reduxForm({ form: "carsNewForm" })(
  connect(mapReduxStateToProps, mapDispatchToProps)(CarsNew)
);
