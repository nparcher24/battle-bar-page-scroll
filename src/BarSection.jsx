import * as React from "react";
import CalloutOne from "./CalloutOne";

export default function BarSection(props) {
  const [bottomOffset, setbottomOffset] = React.useState(0);
  const [onScreen, setOnScreen] = React.useState(false);
  const [showTabs, setShowTabs] = React.useState(false);
  const [topOffset, setTopOffset] = React.useState(100000);
  const imageRef = React.useRef();
  const divRef = React.useRef();
  const multiple = 0.3;
  const adjust = 20;

  const [positions, setPositions] = React.useState([]);

  React.useEffect(() => {
    setPositions([
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          150 * (1 - multiple),
        corner: "upLeft",
        top: "20%",
        right: 420,
        adjust: Math.random() * adjust - adjust / 2,
      },
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          150 * (1 - multiple),
        corner: "downLeft",
        top: "75%",
        right: 410,
        adjust: Math.random() * adjust - adjust / 2,
      },
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          150 * (1 - multiple),
        corner: "upRight",
        top: "15%",
        right: 270,
        adjust: Math.random() * adjust - adjust / 2,
      },
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          150 * (1 - multiple),
        corner: "downRight",
        top: "85%",
        right: 260,
        adjust: Math.random() * adjust - adjust / 2,
      },
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          90 * (1 - multiple),
        corner: "upLeft",
        top: "50%",
        right: 420,
        adjust: Math.random() * adjust - adjust / 2,
      },
      {
        width:
          Math.floor(Math.random() * (200 - 200 * (1 - multiple))) +
          200 * (1 - multiple),
        height:
          Math.floor(Math.random() * (150 - 150 * (1 - multiple))) +
          90 * (1 - multiple),
        corner: "downRight",
        top: "50%",
        right: 280,
        adjust: Math.random() * adjust - adjust / 2,
      },
    ]);

    console.log(positions);
  }, []);

  React.useEffect(() => {}, []);
  function onScroll() {
    const divTop = divRef.current.getBoundingClientRect().top;
    const divBottom = divRef.current.getBoundingClientRect().bottom;
    const imageBottom = imageRef.current.getBoundingClientRect().bottom;
    const imageHeight = imageRef.current.getBoundingClientRect().height;

    const bottomCalc = divBottom - imageBottom;
    const topCalc = imageHeight + divTop - imageBottom;

    if (topCalc > 0) {
      setTopOffset(topCalc);
    } else {
      setTopOffset(0);
    }

    if (bottomCalc < 0) {
      setbottomOffset(-bottomCalc);
    } else {
      setbottomOffset(0);
    }

    if (bottomCalc >= 0 && topCalc <= 0) {
      setShowTabs(true);
    } else {
      setShowTabs(false);
    }
  }

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("resize", onScroll);
  }, []);

  return (
    <div
      style={{
        // position: 'fixed',
        // top: '15%',
        clipPath: `inset(${topOffset}px 0px ${bottomOffset}px 0px)`,
        // height: '70%',
      }}
      ref={imageRef}
      className="w-screen h-auto flex flex-col overflow-hidden items-center"
    >
      <div ref={divRef} className="relative w-screen h-screen">
        {props.backgroundView}
      </div>
      <div
        className={
          "fixed w-screen h-screen flex content-center justify-center"
          //+ (props.isOpposite ? "right-1/5" : "left-1/5")
        }
      >
        <div className="fixed sm:w-2/3 z-10 inset-0 flex flex-row sm:justify-center justify-end pb-20 sm:pb-0">
          <div className="max-w-3xl flex flex-col-reverse flex-1 sm:flex-row items-center w-full p-6">
            <div className="flex flex-col space-y-10">
              <img
                // ref={imageRef}
                // className="mx-auto max-w-3xl w-full filter drop-shadow-xl p-6" //"fixed top-1/3 h-3/5 md:top-1/10 md:h-4/5 max-h-200 z-20"
                // style={{
                //   // position: 'fixed',
                //   // top: '15%',
                //   clipPath: `inset(${topOffset}px 0px ${bottomOffset}px 0px)`,
                //   // height: '70%',
                // }}
                className="filter drop-shadow-2xl"
                src={props.barImageUrl}
                alt="test"
              />
              <a
                href={props.link}
                class=" drop-shadow xl filter box-border relative z-50 inline-flex items-center justify-center w-full max-w-xs mx-auto px-8 py-3 md:py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-orange-300 ring-offset-yellow-400 hover:ring-offset-orange-300 ease focus:outline-none hover:scale-110"
              >
                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-yellow-400 opacity-30 group-hover:translate-x-0"></span>
                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-yellow-400 opacity-30 group-hover:translate-x-0"></span>
                <span class="relative z-20 flex items-center text-2xl sm:text-4xl font-wildwood text-yellow-100">
                  BUY NOW
                </span>
              </a>
            </div>
            {/* <ul
              className={` w-full text-center sm:text-left px-6 pb-6 md:pb-24 flex-auto font-bold text-2xl space-y-4 ${props.textModifier} drop-shadow-md filter`}
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
            </ul> */}
          </div>
          <div className=" w-0 sm:w-1/3" />

          {/* <a
            href="#_"
            class="box-border relative z-30 inline-flex items-center justify-center w-48 mx-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-yellow-300 ring-offset-yellow-200 hover:ring-offset-yellow-500 ease focus:outline-none"
          >
            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-yellow-400 opacity-30 group-hover:translate-x-0"></span>
            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-yellow-400 opacity-30 group-hover:translate-x-0"></span>
            <span class="relative z-20 flex items-center text-sm">
              <svg
                class="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Button Text
            </span>
          </a> */}

          {/* {positions.length > 0 &&
            props.callouts.map((text, i) => {
              let position = positions[i];
              // console.log(position);
              return (
                <CalloutOne
                  showTabs={showTabs}
                  width={position.width}
                  height={position.height}
                  radius={10.0}
                  corner={position.corner}
                  right={position.right + position.adjust}
                  top={position.top}
                  strokeWidth="3"
                  foregroundColor="#FFC672"
                  text={text}
                  textWidth={150.0}
                />
              );
            })} */}

          {/* <CalloutOne
            showTabs={showTabs}
            width={200.0}
            height={150.0}
            radius={10.0}
            corner="downLeft"
            right={200}
            top="50%"
            strokeWidth="3"
            foregroundColor="#ffffff"
            text="SOME TEXT HERE, BUT ITS TOO MUCH"
            textWidth={300.0}
          /> */}
        </div>
        {/* <div className="fixed top-1/3 h-3/5 md:top-1/10 md:h-4/5 hidden sm:block z-50">
          <CalloutOne
            showTabs={showTabs}
            width={220.0}
            height={150.0}
            radius={10.0}
            corner="downLeft"
            left="20%"
            top="28%"
            strokeWidth="3"
            foregroundColor="#ffffff"
            text="SOME TEXT HERE, BUT ITS TOO MUCH"
            textWidth={200.0}
          />
          <CalloutOne
            showTabs={showTabs}
            width={220.0}
            height={120}
            radius={10.0}
            corner="downLeft"
            left="56%"
            top="52.5%"
            strokeWidth="3"
            foregroundColor="#ffffff"
            text="SOME TEXT HERE, BUT ITS TOO MUCH"
            textWidth={200.0}
          />
          <CalloutOne
            showTabs={showTabs}
            width={100.0}
            height={80}
            radius={10.0}
            corner="upRight"
            left="74%"
            top="71%"
            strokeWidth="3"
            foregroundColor="#ffffff"
            text="SOME TEXT HERE, BUT ITS TOO MUCH"
            textWidth={200.0}
          />
          <CalloutOne
            showTabs={showTabs}
            width={100.0}
            height={150.0}
            radius={10.0}
            corner="upRight"
            left="74%"
            top="43%"
            strokeWidth="3"
            foregroundColor="#ffffff"
            text="SOME TEXT HERE, BUT ITS TOO MUCH"
            textWidth={200.0}
          />
        </div> */}
        )
      </div>
    </div>
  );
}
