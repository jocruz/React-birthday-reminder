import React from "react";
import { Person } from "./Person";

export const List = ({ people }) => {

  return (
    <div>
    {people.map((person)=>{
      const {id,image,name,age} = person
      return <Person key = {id} image = {image} name = {name} age = {age} />
    })}
</div>
  );
};
