import * as React from "react";
// import SpeedKmph from "./SpeedKmph";
// import SpeedMph from "./SpeedMph";
import SpeedComp from "./SpeedComp";

const intialState = {
  kmph: 0,
  mph: 0
};

const Main = () => {
  const [speedObject, setSpeedObject] = React.useState(intialState);

  const kmphCallback = (speed) => {
    // speed = parseInt(speed);
    setSpeedObject({
      kmph: speed,
      mph: speed * 0.6
    });
  };

  const mphCallback = (speed) => {
    // speed = parseInt(speed);
    setSpeedObject({
      kmph: speed * 1.6,
      mph: speed
    });
  };

  return (
    <div>
      <SpeedComp type="kmph" speed={speedObject.kmph} callback={kmphCallback} />
      <SpeedComp type="mph" speed={speedObject.mph} callback={mphCallback} />
    </div>
  );
};
export default Main;
