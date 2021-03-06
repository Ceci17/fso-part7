import React from "react";

const Country = ({ data }) => {
  const { country, notFound } = data;

  if (!country && !notFound) {
    return null;
  }

  if (!country && notFound) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country[0].name} </h3>
      <div>capital {country[0].capital} </div>
      <div>population {country[0].population}</div>
      <img
        src={country[0].flag}
        height="100"
        alt={`flag of ${country[0].name}`}
      />
    </div>
  );
};

export default Country;
