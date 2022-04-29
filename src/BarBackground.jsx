import * as React from "react";
import Topo from "./TOPO.jsx";

export default function BarBackground(props) {
  function windowSize() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setIsMobile(false);
      console.log("false");
    } else {
      setIsMobile(true);
      console.log("true");
    }
  }

  React.useLayoutEffect(() => {
    windowSize();
    window.addEventListener("resize", windowSize);
    return () => window.removeEventListener("resize", windowSize);
  }, []);

  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: props.backgroundColorTwo }}
    >
      {/* <div className="w-full h-1/2 bg-yellow-50" /> */}
      <div
        className={
          "w-full  md:w-full h-full md:h-full absolute top-1/5 md:top-0 md:max-h-96" +
          (props.oppositeSide ? "right-1/3" : "left-1/3")
        }
        style={{
          backgroundColor: props.backgroundColor,
          // backgroundSize: '1000px 1000px',
        }}
      />
      <div
        className={
          "w-full md:w-full h-4/5 md:h-full absolute top-1/5 md:top-0 opacity-50 bg-red-500" +
          (props.oppositeSide ? "right-1/3" : "left-1/3")
        }
      >
        <Topo className="w-full h-full" lineColor={props.lineColor} />
        <Topo className="w-full h-full" lineColor={props.lineColor} />
      </div>
      <ul
        className={` absolute flex flex-col font-veneer tracking-wide lg:pl-10 justify-center lg:text-5xl lg:w-1/2 md:mr-10 sm:text-right w-full sm:w-1/3 sm:right-0 bottom-0 h-2/3 sm:h-full sm:bottom-0 px-6 pb-6  font-bold text-2xl space-y-6 ${props.textModifier} drop-shadow-md filter`}
      >
        {props.callouts.map((callout, index) => {
          return (
            <li
              className="transition transform duration-400 hover:scale-110"
              id={callout}
            >
              {callout}
            </li>
          );
        })}
      </ul>
      {!isMobile ? (
        <div
          className="flex flex-col w-1/2 left-0 h-full absolute bg-cover py-4 space-y-4"
          style={{
            backgroundImage: ` url(${props.desktopImageURL})`,
            backgroundPosition: "right",
          }}
        >
          {/* <h1 className=" left-0 px-12 text-6xl font-extrabold text-white">
            {props.barName}
          </h1>
          <h2 className="px-12 text-4xl font-medium text-white font-mono">
            {props.barSubtitle}
          </h2> */}
        </div>
      ) : (
        <div
          className="flex flex-col w-screen top-0 h-1/3 absolute bg-cover "
          style={{
            backgroundImage: `url(${props.mobileImageURL})`,
            backgroundPosition: "bottom",
          }}
        >
          {/* <h1 className="text-white w-full px-2 pt-2 text-center text-3xl font-bold">
            {props.barName}
          </h1>
          <h2 className="px-2 text-2xl font-medium text-center text-white font-mono">
            {props.barSubtitle}
          </h2> */}
          {/* <button
            type="button"
            class="w-48  my-2  mx-auto items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            BUY NOW
          </button> */}
        </div>
      )}
    </div>
  );
}
