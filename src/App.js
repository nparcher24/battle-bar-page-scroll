import React from "react";
import "./App.css";
import BarSection from "./BarSection";
import BarBackground from "./BarBackground";

function App() {
  // const [bottomOffset, setbottomOffset] = React.useState(0);
  // const imageRef = React.useRef();
  // const divRef = React.useRef();

  // const [isMobile, setIsMobile] = React.useState(false);

  // function windowSize() {
  //   const windowWidth = window.innerWidth;
  //   if (windowWidth > 768) {
  //     setIsMobile(false);
  //     console.log("false");
  //   } else {
  //     setIsMobile(true);
  //     console.log("true");
  //   }
  // }

  // React.useLayoutEffect(() => {
  //   windowSize();
  //   window.addEventListener("resize", windowSize);
  //   return () => window.removeEventListener("resize", windowSize);
  // }, []);

  return (
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
            backgroundColor="#d38332"
            barName="PEANUT BUTTER"
            barSubtitle='"K-BAR"'
            oppositeSide={false}
            backgroundColorTwo="#FDBA76"
            lineColor="#E4A25E"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633026316/peanuts_vertical_me1lkd.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633024926/Peanuts_stock_ygcfrq.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />
      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418156/BB-NEW-PAG-MOAB-V2-B_cumm7i.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#E01E3D"
            barName="CHOCOLATE"
            barSubtitle='"MOAB"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#F3506A"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036064/chocolate_bottom_u1rjbq.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036073/chocolate_right_skd8j5.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />

      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418150/BB-NEW-PAG-BF-V2-B_evifxz.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#235ab3"
            barName="BLUEBERRY"
            barSubtitle='"Blue Falcon"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#5286DB"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036636/blueberry_bottom_hzqjvu.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036652/blueberry_right_cm4wvw.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />

      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418145/BB-NEW-PAG-RED-V2-B_w9zfej.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#f33b56"
            barName="STRAWBERRY"
            barSubtitle='"RED"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#FB7488"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633047925/strawberry_bottom_hacw4p.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633047920/strawberry_side_ap5d0g.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />

      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418163/BB-NEW-PAG-FUBAR-V2-B_ccgkx0.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#bc844d"
            barName="COOKIES & CREAM"
            barSubtitle='"FUBAR"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#D7A87B"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633050151/COOKIES_BOTTOM_cxryer.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633050166/COOKIES_RIGHT_jpuliy.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />

      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418160/BB-NEW-PAG-PR-T-B_enl7kd.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#3ed9e9"
            barName="BIRTHDAY CAKE"
            barSubtitle='"PRT"'
            oppositeSide={false}
            backgroundColorTwo="#71E8F4"
            lineColor="#FFFFFF"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633048986/birthday_cake_bottom_ifjavw.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633090949/birthday_cake_right_obdmnk.png"
          />
        }
      />
      <div className="w-screen h-2 z-10 bg-black" />

      <BarSection
        isOpposite={false}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1632418161/BB-NEW-PAG-FBR-V2-B_qqu0xr.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#ADA094"
            barName="S'MORES"
            barSubtitle='"FBR"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#C5BAB0"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633049680/smores_bottom_f9jmze.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633049684/smores_right_daoswm.png"
          />
        }
      />

      {/* <ComponentsBarSection /> */}
      {/* <ComponentsBarSection /> */}
    </div>
  );
}

export default App;
