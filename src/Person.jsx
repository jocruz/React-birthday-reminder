import React from "react";

export const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image}  alt = {name} className="img"></img>
      <div>
      <h1>{name}</h1>
      <p>{age} years</p>
      </div>

    </article>
  );
};
