import * as React from "react";

const SpeedMph = (props) => {
  const onChangeHandler = (e) => {
    props.callback(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>Enter speed in mph</legend>
        <input onChange={onChangeHandler} value={props.speed} />
        <hr />
      </fieldset>
    </div>
  );
};
export default SpeedMph;
