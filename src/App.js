import React from "react";
import "./App.css";
import BarSection from "./BarSection";
import BarBackground from "./BarBackground";

function App() {
  const [bottomOffset, setbottomOffset] = React.useState(0);
  const imageRef = React.useRef();
  const divRef = React.useRef();

  return (
    // <div>
    //   <div className="w-screen h-screen bg-red-400" />
    //   <div className="w-screen h-screen bg-blue-400" />
    //   <div className="w-screen h-screen bg-yellow-400" />
    //   <div className="w-screen h-screen bg-green-400" />
    //   <div className="w-screen h-screen bg-pink-400" />
    //   <div className="w-screen h-screen bg-purple-400" />
    // </div>
    <div className="w-screen h-auto flex flex-col overflow-hidden items-center">
      <MeatAndPotatoes />
    </div>
  );
}

function MeatAndPotatoes() {
  return (
    <div>
      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418163/BB-NEW-PAG-KBAR-V2-D_xih4ko.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#AB0000"
            oppositeSide={false}
            backgroundColorTwo="#FFFFFF"
          />
        }
      />
      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418156/BB-NEW-PAG-MOAB-V2-B_cumm7i.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#dadf83"
            oppositeSide={false}
            backgroundColorTwo="#000000"
          />
        }
      />
      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418150/BB-NEW-PAG-BF-V2-B_evifxz.png"
        }
        backgroundView={<div className="bg-blue-400 h-full w-full" />}
      />
      {/* <ComponentsBarSection
        barImageUrl={
          'https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418156/BB-NEW-PAG-MOAB-V2-B_cumm7i.png'
        }
        backgroundView={<div className="bg-red-400 h-full w-full" />}
      />
      <ComponentsBarSection
        barImageUrl={
          'https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418145/BB-NEW-PAG-RED-V2-B_w9zfej.png'
        }
        backgroundView={<div className="bg-pink-400 h-full w-full" />}
      />
      <ComponentsBarSection
        barImageUrl={
          'https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418163/BB-NEW-PAG-FUBAR-V2-B_ccgkx0.png'
        }
        backgroundView={<div className="bg-gray-400 h-full w-full" />}
      />
      <ComponentsBarSection
        barImageUrl={
          'https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418161/BB-NEW-PAG-FBR-V2-B_qqu0xr.png'
        }
        backgroundView={<div className="bg-white h-full w-full" />}
      /> */}
      <div className="h-screen w-screen bg-black" />
      {/* <ComponentsBarSection /> */}
      {/* <ComponentsBarSection /> */}
    </div>
  );
}

export default App;
