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
      <div className="w-screen h-screen bg-white" />

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={"https://www.google.com"}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932889/Battle%20Bars/Peanut_Butter_sg4pab.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#d38332"
            textModifier={"text-white"}
            barName="PEANUT BUTTER"
            barSubtitle='"K-BAR"'
            oppositeSide={false}
            backgroundColorTwo="#FDBA76"
            lineColor="#E4A25E"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
              "Ian, come up with more funny shit",
            ]}
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633026316/peanuts_vertical_me1lkd.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633024926/Peanuts_stock_ygcfrq.png"
          />
        }
      />
      {/* <div className="w-screen h-screen bg-white" /> */}
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}
      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932876/Battle%20Bars/Chocolate_sobk9h.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#E01E3D"
            barName="CHOCOLATE"
            barSubtitle='"MOAB"'
            textModifier={"text-white"}
            oppositeSide={false}
            backgroundColorTwo="transparent"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            lineColor="#F3506A"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036064/chocolate_bottom_u1rjbq.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036073/chocolate_right_skd8j5.png"
          />
        }
      />
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932889/Battle%20Bars/Blueberry_jbyeae.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#235ab3"
            barName="BLUEBERRY"
            barSubtitle='"Blue Falcon"'
            textModifier={"text-white"}
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#5286DB"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036636/blueberry_bottom_hzqjvu.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633036652/blueberry_right_cm4wvw.png"
          />
        }
      />
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932877/Battle%20Bars/Strawberry_aajkin.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#f33b56"
            barName="STRAWBERRY"
            barSubtitle='"RED"'
            textModifier={"text-white"}
            oppositeSide={false}
            backgroundColorTwo="transparent"
            lineColor="#FB7488"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633047925/strawberry_bottom_hacw4p.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633047920/strawberry_side_ap5d0g.png"
          />
        }
      />
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932879/Battle%20Bars/Cookies_n_Cream_htl6sl.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#bc844d"
            barName="COOKIES & CREAM"
            textModifier={"text-white"}
            barSubtitle='"FUBAR"'
            oppositeSide={false}
            backgroundColorTwo="transparent"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            lineColor="#D7A87B"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633050151/COOKIES_BOTTOM_cxryer.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633050166/COOKIES_RIGHT_jpuliy.png"
          />
        }
      />
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932869/Battle%20Bars/Birthday_Cake_t1egbm.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#3ed9e9"
            barName="BIRTHDAY CAKE"
            textModifier={"text-white"}
            barSubtitle='"PRT"'
            oppositeSide={false}
            backgroundColorTwo="#71E8F4"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            lineColor="#FFFFFF"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633048986/birthday_cake_bottom_ifjavw.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633090949/birthday_cake_right_obdmnk.png"
          />
        }
      />
      {/* <div className="w-screen h-2 z-10 bg-black" /> */}

      <BarSection
        isOpposite={false}
        textModifier={"text-white"}
        link={""}
        barImageUrl={
          "https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1650932885/Battle%20Bars/Smores_mrhjtm.png"
        }
        backgroundView={
          <BarBackground
            backgroundColor="#ADA094"
            barName="S'MORES"
            barSubtitle='"FBR"'
            textModifier={"text-white"}
            oppositeSide={false}
            backgroundColorTwo="transparent"
            callouts={[
              "Gluten Free",
              "Owned and operated by American heroes",
              "Tastes better than your mama's rice crispy treats",
              "All natural ingredients",
              "Improves zombie apocalypse survival odds",
            ]}
            lineColor="#C5BAB0"
            mobileImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633049680/smores_bottom_f9jmze.png"
            desktopImageURL="https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto/v1633049684/smores_right_daoswm.png"
          />
        }
      />
      <div className="h-screen w-screen bg-white" />

      {/* <ComponentsBarSection /> */}
      {/* <ComponentsBarSection /> */}
    </div>
  );
}

export default App;
