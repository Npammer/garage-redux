import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchCars } from "../actions/actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.match.params.garage);
  }
  renderList = () => {
    // eslint-disable-next-line arrow-parens
    return this.props.cars.map((car) => (
      <div className="cars" key={car.plate}>
        <h3>{car.brand}</h3>
        <h3>{car.model}</h3>
        <h3>{car.owner}</h3>
        <h3>{car.plate}</h3>
      </div>
    ));
  };

  render() {
    return this.renderList();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    cars: reduxState.cars,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsIndex);
