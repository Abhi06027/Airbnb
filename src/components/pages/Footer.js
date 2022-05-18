import React from "react";
import Divider from "../widgets/Divider";
import Socialimg from "../Icons/Socialimg";
import Socialdata from "../widgets/Socialdata";
function Footer(props) {
  return (
    <>
      <div className="bg-gray-100 h-full text-sm lg:text-base">
        <div className=" px-5 lg:pxs-5 pt-5 lg:pt-11 lg:flex justify-center ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-36">
            <div>
              <p className="font-bold py-2"> Support </p>
              <p className="py-2 hover:underline cursor-pointer">
                Help Centre{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Safety information{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Cancellation options{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Our COVID-19 Response{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Supporting people with disabilities{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Report a neighbourhood concern{" "}
              </p>
            </div>

            <div className=" my-5 md:hidden lg:hidden  ">
              <Divider />
            </div>

            <div>
              <p className="font-bold py-2"> Community </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Airbnb.org: disaster relief housing
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Support Afghan refugees{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Combating discrimination{" "}
              </p>
            </div>

            <div className=" my-5 md:hidden lg:hidden  ">
              <Divider />
            </div>

            <div>
              <p className="font-bold py-2"> Hosting </p>
              <p className="py-2 hover:underline cursor-pointer">Try hosting</p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                AirCover: protection for Hosts{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Explore hosting resources{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Visit our community forum{" "}
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                How to host responsibly
              </p>
            </div>

            <div className="my-5 md:hidden lg:hidden">
              <Divider />
            </div>

            <div>
              <p className="font-bold py-2">About</p>
              <p className="py-2  hover:underline cursor-pointer">Newsroom</p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Learn about new features
              </p>
              <p className="py-2 hover:underline cursor-pointer">
                Letter from our founders
              </p>
              <p className="py-2 hover:underline cursor-pointer"> Careers </p>
              <p className="py-2 hover:underline cursor-pointer"> Investors</p>
              <p className="py-2 hover:underline cursor-pointer">
                {" "}
                Airbnb Luxe
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 px-5 lg:px-28">
          <Divider />
        </div>

        <div className="lg:flex justify-between items-center px-5 lg:px-28 pb-5">
          <div className="flex space-x-3 py-2">
            <p className=" hover:underline cursor-pointer">
              {" "}
              © 2022 Airbnb, Inc.
            </p>
            <div className="lg:flex space-x-3  hidden  ">
              <p className=" hover:underline cursor-pointer"> Privacy</p>
              <p className=" hover:underline cursor-pointer"> Terms</p>
              <p className=" hover:underline cursor-pointer"> Sitemap</p>
              <p className=" hover:underline cursor-pointer">
                {" "}
                Company details
              </p>
            </div>
          </div>
          <div className="flex space-x-3 lg:hidden">
            <p className=" hover:underline cursor-pointer"> Privacy</p>
            <p className=" hover:underline cursor-pointer"> Terms</p>
            <p className=" hover:underline cursor-pointer"> Sitemap</p>
            <p className=" hover:underline cursor-pointer"> Company details</p>
          </div>

          <div className="flex space-x-3">
            <p className=" hover:underline cursor-pointer"> English (IN).</p>
            <p className=" hover:underline cursor-pointer"> ₹ INR </p>

            <div className="lg:flex items-center space-x-5 pl-3 hidden">
              {Socialdata.map(function dcard(val, index) {
                return (
                  <div key={index}>
                    <Socialimg
                      socialstyle={val.socialstyle}
                      social={val.imgsrc}
                    />
                  </div>
                );
              })}

              {/* <div className="cursor-pointer">
                <Socialimg social="./images/insta.png"> </Socialimg>
              </div>
              <div className="cursor-pointer">
                <Socialimg social="./images/facebook.png"> </Socialimg>
              </div>
              <div className="cursor-pointer">
                <Socialimg social="./images/twitter.png"> </Socialimg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
