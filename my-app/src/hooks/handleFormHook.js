import React from "react";

const HandleFormHook = callback => {
  const [inputs, setInputs] = React.useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      console.log(inputs);
    }
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default HandleFormHook;
