import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'; 

import { fetchCar, destroyCar } from "../actions/index";


class CarsShow extends Component {

  componentDidMount() {
    if(!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.destroyCar(this.props.car.id, this.props.history);
  }

  render() {
    if(!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>{this.props.car.model} - {this.props.car.brand}</p>
        <p>{this.props.car.owner}</p>
        <p>{this.props.car.plate}</p>
        {/* <Link to={"/"} onClick={this.handleClick}>
          <p>Delete car</p>
        </Link> */}
        <button className="delete" onClick={this.handleClick}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          Delete
        </button>
      </div>  
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return {
    car
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar, destroyCar },
    dispatch
    ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);