import "./Datepicker.css";
import Appbar from "./components/pages/Appbar";
import ExperienceList from "./components/widgets/ExperienceList";
import Bgheader from "./components/Icons/Bgheader";
import Footer from "./components/pages/Footer";
import Questionimgmain from "./components/widgets/Questionimgmain.js";
import DestinationList from "./components/widgets/DestinationList";
import Ukraine from "./components/pages/Ukraine";
import Textfield from "./components/widgets/Textfield";
import ButtonRaised from "./components/widgets/ButtonRaised";
function App() {
  return (
    <>
      <div className="bg-black">
        <Appbar logo="./images/Airbnblogo1.png"> </Appbar>

        <div className="text-center  flex justify-center px-5 md:px-10  lg:px-32">
          <div className="lg:w-28 w-28 py-2 lg:py-2 cursor-pointer mt-56 md:mt-48 lg:mt-60  absolute text-base lg:text-base border-2  rounded-xl text-white">
            <ButtonRaised>{"Learn more"}</ButtonRaised>
          </div>
          <div className="text-white text-3xl text-center lg:text-5xl mt-24 lg:mt-44 px-16 md:px-44 absolute font-semibold ">
            <Textfield>
              {"Help house 100,000 refugees fleeing Ukraine"}
            </Textfield>
            {/* mt-56 md:mt-48 lg:mt-60 */}
          </div>
        </div>

        <div className="px-5 md:px-10 lg:px-32 pb-12  ">
          <Ukraine />
        </div>
      </div>

      <div className=" h-[250px] lg:h-[500px] bg-black text-center lg:pt-10 px-5 md:px-10 lg:px-32 flex ">
        <Bgheader />
      </div>

      <DestinationList />

      <ExperienceList />

      <Questionimgmain />

      <Footer />
    </>
  );
}

export default App;
