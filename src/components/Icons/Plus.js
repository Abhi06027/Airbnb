import React from "react";

function Plus(Props) {
  return (
    <>
      <div className="flex space-x-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-9 text-gray-500 hover:text-black  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </>
  );
}

export default Plus;
