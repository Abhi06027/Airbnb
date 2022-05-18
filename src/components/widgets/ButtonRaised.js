import React from "react";

export default function ButtonRaised({ type = "button", children }) {
  return (
    <div>
      <button className=" font-semibold">{children}</button>
    </div>
  );
}
