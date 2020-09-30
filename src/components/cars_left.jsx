import React, { Component } from "react";
import { Link } from "react-router-dom";

class CarsLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cars-left">
        <img
          className="garage-img"
          src="https://renolocksmithbest.com/wp-content/uploads/2020/02/Auto_Repair_Mechanic.jpg"
          alt="garage"
        />
        <div className="index-left-content">
          <div className="garage-logo-div">
            <img
              className="garage-logo"
              src="https://i.pinimg.com/originals/07/59/80/075980ad6d67998055d7732316b73927.jpg"
              alt="garage logo"
            />
          </div>
          <h3>Pammers garage</h3>
          <h5>
            We deliver the best service at the best prices. Our customer's
            satisfaction is of the utmost importance to us.
          </h5>
          <div className="index-left-content-link">
            <Link to={this.props.buttonPath} className="btn-new-car">
              {this.props.buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CarsLeft;
