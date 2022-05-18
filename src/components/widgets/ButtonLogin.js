import React from "react";

export default function ButtonLogin({ type = "button", children }) {
  return (
    <div>
      <button className="bg-white cursor-pointer py-2 px-2 rounded-full">
        {children}
      </button>
    </div>
  );
}
