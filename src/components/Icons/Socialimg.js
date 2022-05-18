import React from "react";
function Socialimg(props) {
  return (
    <div className={props.socialstyle}>
      <img src={props.social} alt="sociallogo" />
    </div>
  );
}

export default Socialimg;
