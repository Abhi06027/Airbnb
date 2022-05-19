import "./Datepicker.css";
import Appbar from "./components/pages/Appbar";
import ExperienceList from "./components/widgets/ExperienceList";
import Bgheader from "./components/Icons/Bgheader";
import Footer from "./components/pages/Footer";
import Questionimgmain from "./components/widgets/Questionimgmain.js";
import DestinationList from "./components/widgets/DestinationList";
// import Newairbnbanner from "./components/pages/Newairbnbanner";
// import Textfield from "./components/widgets/Textfield";
// import ButtonRaised from "./components/widgets/ButtonRaised";
function App() {
  return (
    <>
      <div className="bg-black">
        <Appbar logo="./images/Airbnblogo1.png"> </Appbar>
        <div className=" h-[250px] lg:h-[500px] text-center  px-5 md:px-10 lg:px-32 flex ">
          <Bgheader />
        </div>
      </div>
      {/* <div className="text-center flex justify-center px-5 md:px-10 lg:px-32">
        <div className=" lg:mb-52 ">
          <Newairbnbanner newairbnbimg="./images/AIRbnbnew.jpg"></Newairbnbanner>
        </div>
      </div> */}

      <DestinationList />

      <ExperienceList />

      <Questionimgmain />

      <Footer />
    </>
  );
}

export default App;
