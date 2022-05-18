import React from "react";
import ReactDatePicker from "react-datepicker";

import classnames from "classnames";

export type DatePickerProps = {
  name: string,
  placeholder: string,
  error?: boolean,
  errorMessage?: string,
  onChange?: (e: React.ChangeEvent<any>) => void,
  onBlur?: (e: any) => void,
  value?: any,
  disableFutureBeyond?: string,
  disablePastFrom?: string,
  excludeDates?: Array<Date>,
};

const Airbnbdatepicker: React.FC<DatePickerProps> = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage,
  disableFutureBeyond,
  disablePastFrom,
  excludeDates = [],
}): React.ReactElement => {
  //This date picker enforces the use of JS date with locale timezone conversion
  //instead of the UTC date functions.  Many other deveopers have faced this issue as well.
  //deveopers have solved this issue using moment.js but that feels  heavy handed to include it just for
  //this issue so instead lets create the date object without the TZ so it assumes the local timezone.

  return (
    <div className="w-full">
      <div
        className={classnames(
          "w-full relative",
          { "text-skin-dark ": !error },
          {
            "text-error": error,
          }
        )}
      >
        <span
          className={classnames(
            "absolute float-right left-3 top-3.5 flex items-center z-10"
          )}
        ></span>
        <ReactDatePicker
          autoComplete="off"
          name={name}
          className={classnames("pl-9", { "input-error": error })}
          placeholderText={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          excludeDates={excludeDates}
        />
      </div>
    </div>
  );
};

export default Airbnbdatepicker;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "./Datepicker.css";
// import ButtonRaised from "./ButtonRaised";
// import Search from "../Icons/Search";

// function Airbnbdatepicker(props) {
//   const [selectDate, setSelectedDate] = useState(null);

//   return (
//     <div className="bg-white w-[760px]  h-16  rounded-full">
//       <div className="px-7 absolute  py-2 font-semibold text-sm ml-[220px] z-10 ">
//         Check in{" "}
//       </div>
//       <div className=" bg-white w-44 h-16 rounded-full  absolute ml-[220px] px-7 hover:bg-[#e2e2e2] flex items-center pt-5">
//         <DatePicker
//           selected={selectDate}
//           onChange={(date) => setSelectedDate(date)}
//         />
//       </div>

//       <div className="px-7 absolute py-2  font-semibold   text-sm ml-[390px]  z-10 ">
//         Check out{" "}
//       </div>
//       <div className=" bg-white hover:bg-[#e2e2e2] w-56 h-16 rounded-full absolute ml-[390px]  px-7 flex items-center pt-5">
//         <DatePicker
//           selected={selectDate}
//           onChange={(date) => setSelectedDate(date)}
//         />
//       </div>

//       <div className="px-7 absolute py-2 font-semibold text-sm ml-[520px] z-10 ">
//         Who{" "}
//       </div>
//       <div className="px-7 absolute text-gray-400 font-normal mt-7 text-sm ml-[520px] z-10 ">
//         Add guests{" "}
//       </div>
//       <div className="flex absolut  "> </div>

//       <div className="  hover:bg-[#e2e2e2] bg-white w-44 h-16 rounded-full absolute ml-[520px] px-5 flex items-center ">
//         <div className="bg-[#e41d57] z-10 text-center flex justify-center  space-x-2  ml-24 px-4 py-4  rounded-full  cursor-pointer  text-white ">
//           <Search></Search>
//           <div className="md:hidden lg:flex ">
//             <ButtonRaised>{"Search"}</ButtonRaised>
//           </div>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="px-7 absolute py-2 font-semibold text-sm ">
//           Location{" "}
//         </div>
//         <input
//           className="w-[220px] hover:bg-[#e2e2e2] rounded-full px-7 h-16 text-base pt-3 focus:outline-none"
//           input
//           type="text"
//           placeholder="Where are you going?"
//         />
//       </div>
//     </div>
//   );
// }

// export default Airbnbdatepicker;
