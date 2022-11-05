import { Card } from "../components/card";
import { Link } from "react-router-dom";
import { ApiError } from "next/dist/server/api-utils";
import axios from "axios";
import { useEffect } from "react";

const sendapost = async (info)=>{
    const json = JSON.stringify(info)
    const res = await axios.post("http://0.0.0.0:3001/blogs", json)
    console.log(res)
}

export default function Style() {
  const api = axios.create({
    baseURL: "http://0.0.0.0:3001/blogs",
  });
  return (
    <div className="flex h-[70vh] flex-col justify-between">
      <div className="mb-5 ml-[10vw] ">
        <svg
          width="513"
          height="47"
          viewBox="0 0 513 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.456 36V2.16H16.248C20.056 2.16 22.936 3.088 24.888 4.944C26.872 6.768 27.864 9.28 27.864 12.48C27.864 15.648 26.872 18.176 24.888 20.064C22.936 21.92 20.056 22.848 16.248 22.848H7.944V36H0.456ZM7.944 17.04H15.288C17.08 17.04 18.408 16.64 19.272 15.84C20.168 15.04 20.616 13.92 20.616 12.48C20.616 11.04 20.168 9.936 19.272 9.168C18.408 8.368 17.08 7.968 15.288 7.968H7.944V17.04ZM43.341 36.528C39.117 36.528 35.821 35.392 33.453 33.12C31.085 30.848 29.901 27.76 29.901 23.856C29.901 21.328 30.397 19.12 31.389 17.232C32.413 15.344 33.821 13.872 35.613 12.816C37.437 11.728 39.565 11.184 41.997 11.184C44.397 11.184 46.397 11.696 47.997 12.72C49.629 13.744 50.845 15.184 51.645 17.04C52.477 18.864 52.893 20.992 52.893 23.424V25.104H35.853V21.504H47.613L46.797 22.176C46.797 20.16 46.381 18.64 45.549 17.616C44.749 16.56 43.581 16.032 42.045 16.032C40.349 16.032 39.037 16.656 38.109 17.904C37.213 19.152 36.765 20.944 36.765 23.28V24.048C36.765 26.416 37.341 28.176 38.493 29.328C39.677 30.48 41.373 31.056 43.581 31.056C44.893 31.056 46.125 30.896 47.277 30.576C48.461 30.224 49.581 29.68 50.637 28.944L52.653 33.744C51.437 34.64 50.029 35.328 48.429 35.808C46.861 36.288 45.165 36.528 43.341 36.528ZM57.4436 36V18.096C57.4436 17.04 57.4116 15.968 57.3476 14.88C57.3156 13.792 57.2356 12.72 57.1076 11.664H64.0676L64.8836 18.768H63.7796C64.0996 17.04 64.6116 15.616 65.3156 14.496C66.0516 13.376 66.9476 12.544 68.0036 12C69.0916 11.456 70.3236 11.184 71.6996 11.184C72.3076 11.184 72.7876 11.216 73.1396 11.28C73.4916 11.312 73.8436 11.392 74.1956 11.52L74.1476 17.904C73.4756 17.616 72.8996 17.44 72.4196 17.376C71.9716 17.28 71.3956 17.232 70.6916 17.232C69.3476 17.232 68.2276 17.488 67.3316 18C66.4676 18.512 65.8116 19.264 65.3636 20.256C64.9476 21.248 64.7396 22.448 64.7396 23.856V36H57.4436ZM85.9676 36.528C83.7916 36.528 81.8076 36.288 80.0156 35.808C78.2236 35.328 76.7036 34.656 75.4556 33.792L77.3276 28.992C78.5756 29.76 79.9516 30.368 81.4556 30.816C82.9916 31.264 84.5116 31.488 86.0156 31.488C87.4236 31.488 88.4636 31.264 89.1356 30.816C89.8076 30.368 90.1436 29.76 90.1436 28.992C90.1436 28.352 89.9196 27.856 89.4716 27.504C89.0556 27.152 88.3996 26.896 87.5036 26.736L82.5596 25.824C80.4796 25.408 78.8956 24.64 77.8076 23.52C76.7196 22.4 76.1756 20.944 76.1756 19.152C76.1756 17.584 76.5916 16.208 77.4236 15.024C78.2876 13.808 79.5196 12.864 81.1196 12.192C82.7196 11.52 84.5916 11.184 86.7356 11.184C88.5596 11.184 90.2876 11.408 91.9196 11.856C93.5516 12.304 94.9436 12.992 96.0956 13.92L94.1276 18.576C93.1356 17.84 91.9836 17.248 90.6716 16.8C89.3916 16.352 88.1596 16.128 86.9756 16.128C85.4396 16.128 84.3356 16.384 83.6636 16.896C82.9916 17.376 82.6556 18 82.6556 18.768C82.6556 19.344 82.8476 19.824 83.2316 20.208C83.6476 20.592 84.2716 20.88 85.1036 21.072L90.0956 21.984C92.2396 22.368 93.8716 23.088 94.9916 24.144C96.1116 25.2 96.6716 26.656 96.6716 28.512C96.6716 30.208 96.2236 31.648 95.3276 32.832C94.4316 34.016 93.1676 34.928 91.5356 35.568C89.9356 36.208 88.0796 36.528 85.9676 36.528ZM112.699 36.528C110.107 36.528 107.851 36.016 105.931 34.992C104.043 33.936 102.571 32.464 101.515 30.576C100.491 28.688 99.9791 26.432 99.9791 23.808C99.9791 21.216 100.491 18.976 101.515 17.088C102.571 15.2 104.043 13.744 105.931 12.72C107.851 11.696 110.107 11.184 112.699 11.184C115.291 11.184 117.547 11.696 119.467 12.72C121.387 13.744 122.859 15.2 123.883 17.088C124.939 18.976 125.467 21.216 125.467 23.808C125.467 26.432 124.939 28.688 123.883 30.576C122.859 32.464 121.387 33.936 119.467 34.992C117.547 36.016 115.291 36.528 112.699 36.528ZM112.699 31.056C114.363 31.056 115.675 30.464 116.635 29.28C117.627 28.096 118.123 26.272 118.123 23.808C118.123 21.344 117.627 19.536 116.635 18.384C115.675 17.232 114.363 16.656 112.699 16.656C111.035 16.656 109.707 17.232 108.715 18.384C107.755 19.536 107.275 21.344 107.275 23.808C107.275 26.272 107.755 28.096 108.715 29.28C109.707 30.464 111.035 31.056 112.699 31.056ZM130.148 36V18C130.148 16.976 130.116 15.936 130.052 14.88C129.988 13.792 129.892 12.72 129.764 11.664H136.724L137.252 16.176H136.676C137.476 14.576 138.612 13.344 140.084 12.48C141.556 11.616 143.268 11.184 145.22 11.184C148.068 11.184 150.196 12.016 151.604 13.68C153.044 15.312 153.764 17.856 153.764 21.312V36H146.516V21.648C146.516 19.888 146.196 18.64 145.556 17.904C144.916 17.168 143.956 16.8 142.676 16.8C141.076 16.8 139.796 17.312 138.836 18.336C137.876 19.328 137.396 20.672 137.396 22.368V36H130.148ZM169.041 36.528C166.929 36.528 165.073 36.016 163.473 34.992C161.873 33.968 160.625 32.512 159.729 30.624C158.833 28.736 158.385 26.464 158.385 23.808C158.385 21.184 158.833 18.928 159.729 17.04C160.625 15.152 161.873 13.712 163.473 12.72C165.073 11.696 166.929 11.184 169.041 11.184C170.993 11.184 172.737 11.664 174.273 12.624C175.841 13.552 176.865 14.816 177.345 16.416H176.817L177.393 11.664H184.353C184.257 12.72 184.161 13.792 184.065 14.88C184.001 15.936 183.969 16.976 183.969 18V36H176.769L176.721 31.44H177.297C176.785 32.976 175.761 34.208 174.225 35.136C172.689 36.064 170.961 36.528 169.041 36.528ZM171.249 31.056C172.913 31.056 174.257 30.464 175.281 29.28C176.305 28.096 176.817 26.272 176.817 23.808C176.817 21.344 176.305 19.536 175.281 18.384C174.257 17.232 172.913 16.656 171.249 16.656C169.585 16.656 168.241 17.232 167.217 18.384C166.193 19.536 165.681 21.344 165.681 23.808C165.681 26.272 166.177 28.096 167.169 29.28C168.193 30.464 169.553 31.056 171.249 31.056ZM189.914 36V0.671997H197.162V36H189.914ZM203.085 36V11.664H210.333V36H203.085ZM202.797 7.68V0.912H210.573V7.68H202.797ZM215.537 36V31.296L230.033 15.36V17.088H215.537V11.664H236.561V16.416L221.873 32.496L221.825 30.624H237.041V36H215.537ZM253.482 36.528C249.258 36.528 245.962 35.392 243.594 33.12C241.226 30.848 240.042 27.76 240.042 23.856C240.042 21.328 240.538 19.12 241.53 17.232C242.554 15.344 243.962 13.872 245.754 12.816C247.578 11.728 249.706 11.184 252.138 11.184C254.538 11.184 256.538 11.696 258.138 12.72C259.77 13.744 260.986 15.184 261.786 17.04C262.618 18.864 263.034 20.992 263.034 23.424V25.104H245.994V21.504H257.754L256.938 22.176C256.938 20.16 256.522 18.64 255.69 17.616C254.89 16.56 253.722 16.032 252.186 16.032C250.49 16.032 249.178 16.656 248.25 17.904C247.354 19.152 246.906 20.944 246.906 23.28V24.048C246.906 26.416 247.482 28.176 248.634 29.328C249.818 30.48 251.514 31.056 253.722 31.056C255.034 31.056 256.266 30.896 257.418 30.576C258.602 30.224 259.722 29.68 260.778 28.944L262.794 33.744C261.578 34.64 260.17 35.328 258.57 35.808C257.002 36.288 255.306 36.528 253.482 36.528ZM280.939 46.896L279.259 41.232C280.763 40.944 282.027 40.608 283.051 40.224C284.107 39.84 284.971 39.328 285.643 38.688C286.315 38.08 286.859 37.28 287.275 36.288L288.475 33.456L288.283 36.24L277.723 11.664H285.355L292.315 29.28H290.827L297.883 11.664H305.083L294.091 36.96C293.291 38.784 292.427 40.288 291.499 41.472C290.603 42.688 289.627 43.648 288.571 44.352C287.515 45.056 286.347 45.6 285.067 45.984C283.819 46.368 282.443 46.672 280.939 46.896ZM318.527 36.528C315.935 36.528 313.679 36.016 311.759 34.992C309.871 33.936 308.399 32.464 307.343 30.576C306.319 28.688 305.807 26.432 305.807 23.808C305.807 21.216 306.319 18.976 307.343 17.088C308.399 15.2 309.871 13.744 311.759 12.72C313.679 11.696 315.935 11.184 318.527 11.184C321.119 11.184 323.375 11.696 325.295 12.72C327.215 13.744 328.687 15.2 329.711 17.088C330.767 18.976 331.295 21.216 331.295 23.808C331.295 26.432 330.767 28.688 329.711 30.576C328.687 32.464 327.215 33.936 325.295 34.992C323.375 36.016 321.119 36.528 318.527 36.528ZM318.527 31.056C320.191 31.056 321.503 30.464 322.463 29.28C323.455 28.096 323.951 26.272 323.951 23.808C323.951 21.344 323.455 19.536 322.463 18.384C321.503 17.232 320.191 16.656 318.527 16.656C316.863 16.656 315.535 17.232 314.543 18.384C313.583 19.536 313.103 21.344 313.103 23.808C313.103 26.272 313.583 28.096 314.543 29.28C315.535 30.464 316.863 31.056 318.527 31.056ZM344.808 36.528C341.768 36.528 339.512 35.696 338.04 34.032C336.568 32.336 335.832 29.776 335.832 26.352V11.664H343.08V26.352C343.08 27.888 343.384 29.024 343.992 29.76C344.632 30.496 345.608 30.864 346.92 30.864C348.36 30.864 349.544 30.368 350.472 29.376C351.432 28.352 351.912 26.992 351.912 25.296V11.664H359.16V36H352.104V31.344H352.776C352.04 32.976 350.984 34.256 349.608 35.184C348.264 36.08 346.664 36.528 344.808 36.528ZM365.084 36V18.096C365.084 17.04 365.052 15.968 364.988 14.88C364.956 13.792 364.876 12.72 364.748 11.664H371.708L372.524 18.768H371.42C371.74 17.04 372.252 15.616 372.956 14.496C373.692 13.376 374.588 12.544 375.644 12C376.732 11.456 377.964 11.184 379.34 11.184C379.948 11.184 380.428 11.216 380.78 11.28C381.132 11.312 381.484 11.392 381.836 11.52L381.788 17.904C381.116 17.616 380.54 17.44 380.06 17.376C379.612 17.28 379.036 17.232 378.332 17.232C376.988 17.232 375.868 17.488 374.972 18C374.108 18.512 373.452 19.264 373.004 20.256C372.588 21.248 372.38 22.448 372.38 23.856V36H365.084ZM398.894 36V2.16H414.494C418.206 2.16 421.07 2.944 423.086 4.512C425.102 6.08 426.11 8.224 426.11 10.944C426.11 12.96 425.502 14.672 424.286 16.08C423.102 17.488 421.47 18.432 419.39 18.912V18.144C421.822 18.56 423.694 19.488 425.006 20.928C426.35 22.336 427.022 24.176 427.022 26.448C427.022 29.456 425.95 31.808 423.806 33.504C421.694 35.168 418.766 36 415.022 36H398.894ZM406.046 30.432H414.11C415.966 30.432 417.39 30.08 418.382 29.376C419.374 28.672 419.87 27.552 419.87 26.016C419.87 24.448 419.374 23.328 418.382 22.656C417.39 21.952 415.966 21.6 414.11 21.6H406.046V30.432ZM406.046 16.08H413.15C415.102 16.08 416.542 15.728 417.47 15.024C418.398 14.32 418.862 13.264 418.862 11.856C418.862 10.48 418.398 9.44 417.47 8.736C416.542 8.032 415.102 7.68 413.15 7.68H406.046V16.08ZM431.835 36V0.671997H439.083V36H431.835ZM456.527 36.528C453.935 36.528 451.679 36.016 449.759 34.992C447.871 33.936 446.399 32.464 445.343 30.576C444.319 28.688 443.807 26.432 443.807 23.808C443.807 21.216 444.319 18.976 445.343 17.088C446.399 15.2 447.871 13.744 449.759 12.72C451.679 11.696 453.935 11.184 456.527 11.184C459.119 11.184 461.375 11.696 463.295 12.72C465.215 13.744 466.687 15.2 467.711 17.088C468.767 18.976 469.295 21.216 469.295 23.808C469.295 26.432 468.767 28.688 467.711 30.576C466.687 32.464 465.215 33.936 463.295 34.992C461.375 36.016 459.119 36.528 456.527 36.528ZM456.527 31.056C458.191 31.056 459.503 30.464 460.463 29.28C461.455 28.096 461.951 26.272 461.951 23.808C461.951 21.344 461.455 19.536 460.463 18.384C459.503 17.232 458.191 16.656 456.527 16.656C454.863 16.656 453.535 17.232 452.543 18.384C451.583 19.536 451.103 21.344 451.103 23.808C451.103 26.272 451.583 28.096 452.543 29.28C453.535 30.464 454.863 31.056 456.527 31.056ZM485.544 46.752C483.208 46.752 481.128 46.512 479.304 46.032C477.48 45.584 475.848 44.896 474.408 43.968L475.8 38.784C476.696 39.36 477.64 39.824 478.632 40.176C479.656 40.56 480.696 40.832 481.752 40.992C482.84 41.184 483.912 41.28 484.968 41.28C487.112 41.28 488.712 40.768 489.768 39.744C490.824 38.72 491.352 37.264 491.352 35.376V30.336H491.832C491.32 31.872 490.296 33.104 488.76 34.032C487.224 34.96 485.496 35.424 483.576 35.424C481.4 35.424 479.496 34.928 477.864 33.936C476.264 32.944 475.016 31.536 474.12 29.712C473.224 27.888 472.776 25.744 472.776 23.28C472.776 20.816 473.224 18.672 474.12 16.848C475.016 15.024 476.264 13.632 477.864 12.672C479.496 11.68 481.4 11.184 483.576 11.184C485.528 11.184 487.24 11.648 488.712 12.576C490.216 13.472 491.224 14.672 491.736 16.176L491.352 15.984L491.832 11.664H498.84C498.712 12.72 498.616 13.792 498.552 14.88C498.488 15.936 498.456 16.976 498.456 18V34.56C498.456 38.496 497.352 41.504 495.144 43.584C492.936 45.696 489.736 46.752 485.544 46.752ZM485.736 29.952C487.432 29.952 488.776 29.376 489.768 28.224C490.76 27.072 491.256 25.424 491.256 23.28C491.256 21.136 490.76 19.504 489.768 18.384C488.776 17.232 487.432 16.656 485.736 16.656C483.976 16.656 482.584 17.232 481.56 18.384C480.568 19.504 480.072 21.136 480.072 23.28C480.072 25.424 480.568 27.072 481.56 28.224C482.584 29.376 483.976 29.952 485.736 29.952ZM505.407 25.296L503.151 2.16H512.079L509.775 25.296H505.407ZM503.727 36V28.32H511.503V36H503.727Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="flex justify-around w-screen items-center">
        <Card />

        <div className="flex flex-col h-[500px]">
          <div className="w-[400px] h-[400px] flex flex-col justify-center ">
            <input
              type="text"
              className="border-[2px] border-gray-400 rounded-md m-4 p-2"
              placeholder="Background-image url"
            />
            <input
              type="text"
              className="border-[2px] border-gray-400 rounded-md m-4 p-2"
              placeholder="Subtitle"
            />
          </div>
          <div className="flex justify-center items-center h-100px">
            <Link>
              <p
                onClick={() => sendapost()}
                className="  p-1 rounded-md border-[2px] border-gray-400 cursor-pointer font-bold text-gray-600"
              >
                Done!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}