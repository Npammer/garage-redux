/* eslint-disable import/first */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// Actions
import { fetchCars } from "../actions/actions";

// Components
import CarsLeft from "../components/cars_left";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="cars-index">
        <CarsLeft buttonPath="/new" buttonText="Add a new car" />
        <div className="index-right">
          {this.props.cars.map(car => (
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className="car-card">
                <img
                  src="data:image/png;base64,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"
                  alt="car icon"
                />
                <div className="car-card-content">
                  <h3>
                    {car.brand} - {car.model}
                  </h3>
                  <h4>Owner: {car.owner}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    cars: reduxState.cars,
    garage: reduxState.garage,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsIndex);
