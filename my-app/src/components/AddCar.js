import React from "react";
import { compose } from "recompose";
import {
  getOwnersQuery,
  AddCarMutation,
  getCarsQuery
} from "./../queries/queries";
import { graphql } from "react-apollo";
import HandleFormHook from "./../hooks/handleFormHook";

const AddCar = props => {
  const getFormData = () => {
    console.log(`${inputs}`);
    props.AddCarMutation({
      variables: {
        name: inputs.carName,
        model: parseInt(inputs.model),
        company: inputs.company,
        ownerId: inputs.owner
      },
      refetchQueries: [{ query: getCarsQuery }]
    });
  };

  const { inputs, handleInputChange, handleSubmit } = HandleFormHook(
    getFormData
  );

  const getOwners = () => {
    var data = props.getOwnersQuery;
    if (data.loading) {
      return <option disabled>Owner loading...</option>;
    } else {
      return data.owners.map(owner => {
        return (
          <option key={owner.id} value={owner.id}>
            {owner.name}
          </option>
        );
      });
    } //esle ends here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Car Name</label>
          <input
            type="text"
            name="carName"
            onChange={handleInputChange}
            value={inputs.carName}
          ></input>
        </div>
        <div className="field">
          <label>Model</label>
          <input
            type="number"
            name="model"
            onChange={handleInputChange}
            value={inputs.model}
          ></input>
        </div>
        <div className="field">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            onChange={handleInputChange}
            value={inputs.company}
          ></input>
        </div>
        <div className="field">
          <label>Owner:</label>
          <select
            name="owner"
            onChange={handleInputChange}
            value={inputs.owner}
          >
            <option>Select Owner</option>
            {getOwners(props)}
          </select>
        </div>
        <button>AddCar</button>
      </form>
    </>
  );
};

export default compose(
  graphql(getOwnersQuery, { name: "getOwnersQuery" }),
  graphql(AddCarMutation, { name: "AddCarMutation" })
)(AddCar);
