import React from "react";

export const Person = ({ id, image, name, age }) => {
  return (
    <div key={id}>
      <img src={image} className="img"></img>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};
