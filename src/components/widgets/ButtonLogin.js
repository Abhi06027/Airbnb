import React from "react";

export default function ButtonLogin(props) {
  return (
    <div>
      <button className={props.Buttonstyle}>{props.children}</button>
    </div>
  );
}
