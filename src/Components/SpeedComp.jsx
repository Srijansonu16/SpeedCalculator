import React from "react";

const SpeedComp = (props) => {
  const onChangeHandler = (e) => {
    props.callback(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Enter speed in {props.type}</legend>
        <input onChange={onChangeHandler} value={props.speed} />
        <hr />
      </fieldset>
    </div>
  );
};
export default SpeedComp;
