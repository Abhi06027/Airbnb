import ButtonRaised from "../widgets/ButtonRaised";
import Textfield from "../widgets/Textfield";
import Buttonlogin from "../widgets/ButtonLogin";
import InputField from "../widgets/InputField";
import Customsvg from "../Icons/Customsvg";
import Globesvg from "../Icons/Globesvg";
import Search from "../Icons/Search";
import Buttonloginmenu from "../widgets/Buttonloginmenu";
import Airbnbdatepicker from "../widgets/Airbnbdatepicker";
import React, { useState } from "react";
function Appbar(props) {
  const [showButtonLoginMenu, setShowButtonLoginMenu] = useState(false);
  return (
    <>
      <div className="py-5 px-5 ">
        <div className="md:hidden bg-white w-full rounded-full h-12 justify-center flex items-center">
          <div className="lg:hidden absolute flex items-center space-x-1  text-pink-600">
            <Search />
            <InputField
              type="text"
              placeholder="Where are you going?"
            ></InputField>
          </div>
        </div>

        <div className="lg:justify-between justify-between items-center hidden  md:flex px-16 lg:px-44">
          <div className="w-28 cursor-pointer ">
            <img src={props.logo} alt="Airbnblogo" />
          </div>

          <div className="lg:flex hidden space-x-6 items-center text-white cursor-pointer ">
            <div className="hover:underline ">
              <Textfield> {"Places to stay"}</Textfield>
            </div>

            <div className="hover:underline">
              <Textfield> {"Experiences"}</Textfield>
            </div>

            <div className="hover:underline">
              <Textfield> {"Online Experiences "}</Textfield>
            </div>
          </div>

          <div className="flex items-center  space-x-3">
            <div className="hover:bg-[#282828]  py-2 px-4 cursor-pointer rounded-full text-white">
              <ButtonRaised> {"Become a host"} </ButtonRaised>
            </div>

            <Globesvg />
            <div
              onClick={() => setShowButtonLoginMenu(!showButtonLoginMenu)}
              className="bg-white flex py-2 items-center cursor-pointer px-2 rounded-full "
            >
              <Customsvg />
              <Buttonlogin />
            </div>
          </div>
        </div>
        <div>{showButtonLoginMenu ? <Buttonloginmenu /> : null}</div>

        <div className="lg:flex md:flex justify-center cursor-pointer my-2 md:px-10 hidden">
          <Airbnbdatepicker />
        </div>
      </div>
    </>
  );
}
export default Appbar;
