import * as React from "react";

const SpeedKmph = (props) => {
  const onChangeHandler = (e) => {
    props.callback(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>Enter speed in kmph</legend>
        <input onChange={onChangeHandler} value={props.speed} />
        <hr />
      </fieldset>
    </div>
  );
};
export default SpeedKmph;
