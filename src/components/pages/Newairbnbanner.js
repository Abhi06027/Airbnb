import React from "react";

function Newairbnbanner(props) {
  return (
    <div className="w-full h-[300px] lg:h-[100px] bg-cover bg-center rounded-lg  lg:rounded-2xl ">
      <img src={props.newairbnbimg} alt="newairbnbimg" />
    </div>
  );
}
export default Newairbnbanner;
