import React from "react";

export default function InputField({ type = "text", placeholder, style2 }) {
  return (
    <div className="w-full">
      <input
        className="focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
