import React from "react";

const Person = (props) => {
  return (
    <div>
    <span>
      {props.name} {props.lastname} Age: {props.age}
    </span>
    </div>
  );
};

export default Person;


