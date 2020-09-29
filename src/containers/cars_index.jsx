/* eslint-disable import/first */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// Actions
import { fetchCars } from "../actions/actions";

// FontAwsome
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

/* const element = <FontAwesomeIcon icon={faCarSide} />;

ReactDOM.render(element, document.querySelectorAll(".fa-car-side"));
 */
class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div className="car-index">
        <div className="index-left">
          <img
            className="garage-img"
            src="https://renolocksmithbest.com/wp-content/uploads/2020/02/Auto_Repair_Mechanic.jpg"
            alt="garage"
          />
          <div className="index-left-content">
            <img
              className="garage-logo"
              src="https://i.pinimg.com/originals/07/59/80/075980ad6d67998055d7732316b73927.jpg"
              alt="garage logo"
            />
            <h3>Pammers garage</h3>
            <h5>
              We deliver the best service at the best prices. Our customer's
              satisfaction is of the utmost importance to us.
            </h5>
            <div className="index-left-content-link">
              <Link to={"/new"} className="btn-new-car">
                Add a new Car
              </Link>
            </div>
          </div>
        </div>
        <div className="index-right">
          {this.props.cars.map(car => (
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className="car-card">
                <div className="fa-car-side" />
                <h3>
                  {car.brand} - {car.model}
                </h3>
                <h3>Owner: {car.owner}</h3>
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
