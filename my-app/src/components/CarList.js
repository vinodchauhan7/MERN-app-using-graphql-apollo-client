import React from "react";
import { graphql } from "react-apollo";
import { getCarsQuery } from "./../queries/queries";
import CarDetails from "./CarDetails";

const CarList = props => {
  console.log(props);
  const [Id, setCar] = React.useState(0);

  const displayCars = () => {
    var data = props.data;
    if (data.loading) {
      return <div>Loading Cars...</div>;
    } else {
      return data.cars.map(car => {
        return (
          <li key={car.id} onClick={e => setCar({ Id: car.id })}>
            {car.name}
          </li>
        );
      });
    }
  };

  return (
    <>
      <ul id="carList">{displayCars()}</ul>
      <CarDetails carId={Id}></CarDetails>
    </>
  );
};

export default graphql(getCarsQuery)(CarList);
