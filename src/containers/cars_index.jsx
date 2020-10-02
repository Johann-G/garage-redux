import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'; 

import { fetchCars } from "../actions/index";

// import Message from "../components/message";

class CarsIndex extends Component {

  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }


  // componentWillReceiveProps(newProps) {
  //   if (newProps.cars !== this.props.cars) {
  //     this.props.fetchCars(newProps.garage);
  //   }
  // }



  renderList = (car) => {
    return(
      <Link to={`/cars/${car.id}`} key={car.id}>
        <li key={car.id}>
        <p>{car.model} - {car.brand}</p>
        <p>{car.owner}</p>
      </li>
      </Link>
    );    
  } 

  render() {
    return (
      <div>
        <ul>
          {this.props.cars.map(this.renderList)}
        </ul>
      </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
    ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);