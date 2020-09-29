import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

// Actions
import { fetchCar, deleteCar } from "../actions/actions";

class CarsShow extends Component {
  state = {};

  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.match.params.id, () => {
      this.props.history.push("/");
    });
  };

  render() {
    if (!this.props.car) {
      return "";
    }
    return (
      <div className="cars-show">
        <h3>Cars Show</h3>
        <h4>{this.props.car.brand}</h4>
        <h4>{this.props.car.model}</h4>
        <h4>{this.props.car.owner}</h4>
        <h4>{this.props.car.plate}</h4>
        <Link to="/">Back</Link>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // form URL
  const car = reduxState.cars.find(thisCar => thisCar.id === id);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsShow);
