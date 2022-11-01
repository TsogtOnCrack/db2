import { Card } from "../components/card";

export const Main = () => {
  return (
    <div className="flex flex-col w-screen max-w-MAX_WIDTH px-10  ">
      <div className="flex flex-col justify-start my-10">
        <div className="mb-5">
          <svg
            width="242"
            height="47"
            viewBox="0 0 242 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.456 36V2.16H16.056C19.768 2.16 22.632 2.944 24.648 4.512C26.664 6.08 27.672 8.224 27.672 10.944C27.672 12.96 27.064 14.672 25.848 16.08C24.664 17.488 23.032 18.432 20.952 18.912V18.144C23.384 18.56 25.256 19.488 26.568 20.928C27.912 22.336 28.584 24.176 28.584 26.448C28.584 29.456 27.512 31.808 25.368 33.504C23.256 35.168 20.328 36 16.584 36H0.456ZM7.608 30.432H15.672C17.528 30.432 18.952 30.08 19.944 29.376C20.936 28.672 21.432 27.552 21.432 26.016C21.432 24.448 20.936 23.328 19.944 22.656C18.952 21.952 17.528 21.6 15.672 21.6H7.608V30.432ZM7.608 16.08H14.712C16.664 16.08 18.104 15.728 19.032 15.024C19.96 14.32 20.424 13.264 20.424 11.856C20.424 10.48 19.96 9.44 19.032 8.736C18.104 8.032 16.664 7.68 14.712 7.68H7.608V16.08ZM33.3979 36V0.671997H40.6459V36H33.3979ZM58.0898 36.528C55.4978 36.528 53.2418 36.016 51.3218 34.992C49.4338 33.936 47.9618 32.464 46.9058 30.576C45.8818 28.688 45.3698 26.432 45.3698 23.808C45.3698 21.216 45.8818 18.976 46.9058 17.088C47.9618 15.2 49.4338 13.744 51.3218 12.72C53.2418 11.696 55.4978 11.184 58.0898 11.184C60.6818 11.184 62.9378 11.696 64.8578 12.72C66.7778 13.744 68.2498 15.2 69.2738 17.088C70.3298 18.976 70.8578 21.216 70.8578 23.808C70.8578 26.432 70.3298 28.688 69.2738 30.576C68.2498 32.464 66.7778 33.936 64.8578 34.992C62.9378 36.016 60.6818 36.528 58.0898 36.528ZM58.0898 31.056C59.7538 31.056 61.0658 30.464 62.0258 29.28C63.0178 28.096 63.5138 26.272 63.5138 23.808C63.5138 21.344 63.0178 19.536 62.0258 18.384C61.0658 17.232 59.7538 16.656 58.0898 16.656C56.4258 16.656 55.0978 17.232 54.1058 18.384C53.1458 19.536 52.6658 21.344 52.6658 23.808C52.6658 26.272 53.1458 28.096 54.1058 29.28C55.0978 30.464 56.4258 31.056 58.0898 31.056ZM87.1065 46.752C84.7705 46.752 82.6905 46.512 80.8665 46.032C79.0425 45.584 77.4105 44.896 75.9705 43.968L77.3625 38.784C78.2585 39.36 79.2025 39.824 80.1945 40.176C81.2185 40.56 82.2585 40.832 83.3145 40.992C84.4025 41.184 85.4745 41.28 86.5305 41.28C88.6745 41.28 90.2745 40.768 91.3305 39.744C92.3865 38.72 92.9145 37.264 92.9145 35.376V30.336H93.3945C92.8825 31.872 91.8585 33.104 90.3225 34.032C88.7865 34.96 87.0585 35.424 85.1385 35.424C82.9625 35.424 81.0585 34.928 79.4265 33.936C77.8265 32.944 76.5785 31.536 75.6825 29.712C74.7865 27.888 74.3385 25.744 74.3385 23.28C74.3385 20.816 74.7865 18.672 75.6825 16.848C76.5785 15.024 77.8265 13.632 79.4265 12.672C81.0585 11.68 82.9625 11.184 85.1385 11.184C87.0905 11.184 88.8025 11.648 90.2745 12.576C91.7785 13.472 92.7865 14.672 93.2985 16.176L92.9145 15.984L93.3945 11.664H100.403C100.275 12.72 100.179 13.792 100.115 14.88C100.051 15.936 100.019 16.976 100.019 18V34.56C100.019 38.496 98.9145 41.504 96.7065 43.584C94.4985 45.696 91.2985 46.752 87.1065 46.752ZM87.2985 29.952C88.9945 29.952 90.3385 29.376 91.3305 28.224C92.3225 27.072 92.8185 25.424 92.8185 23.28C92.8185 21.136 92.3225 19.504 91.3305 18.384C90.3385 17.232 88.9945 16.656 87.2985 16.656C85.5385 16.656 84.1465 17.232 83.1225 18.384C82.1305 19.504 81.6345 21.136 81.6345 23.28C81.6345 25.424 82.1305 27.072 83.1225 28.224C84.1465 29.376 85.5385 29.952 87.2985 29.952ZM119.46 46.368V18C119.46 16.976 119.428 15.936 119.364 14.88C119.3 13.792 119.204 12.72 119.076 11.664H126.036L126.612 16.416H126.084C126.564 14.816 127.572 13.552 129.108 12.624C130.644 11.664 132.404 11.184 134.388 11.184C136.5 11.184 138.356 11.696 139.956 12.72C141.556 13.712 142.804 15.152 143.7 17.04C144.628 18.928 145.092 21.184 145.092 23.808C145.092 26.464 144.628 28.736 143.7 30.624C142.804 32.512 141.556 33.968 139.956 34.992C138.356 36.016 136.5 36.528 134.388 36.528C132.436 36.528 130.692 36.064 129.156 35.136C127.652 34.208 126.644 32.976 126.132 31.44H126.708V46.368H119.46ZM132.18 31.056C133.876 31.056 135.236 30.464 136.26 29.28C137.284 28.096 137.796 26.272 137.796 23.808C137.796 21.344 137.284 19.536 136.26 18.384C135.236 17.232 133.876 16.656 132.18 16.656C130.516 16.656 129.156 17.232 128.1 18.384C127.076 19.536 126.564 21.344 126.564 23.808C126.564 26.272 127.076 28.096 128.1 29.28C129.156 30.464 130.516 31.056 132.18 31.056ZM161.309 36.528C158.717 36.528 156.461 36.016 154.541 34.992C152.653 33.936 151.181 32.464 150.125 30.576C149.101 28.688 148.589 26.432 148.589 23.808C148.589 21.216 149.101 18.976 150.125 17.088C151.181 15.2 152.653 13.744 154.541 12.72C156.461 11.696 158.717 11.184 161.309 11.184C163.901 11.184 166.157 11.696 168.077 12.72C169.997 13.744 171.469 15.2 172.493 17.088C173.549 18.976 174.077 21.216 174.077 23.808C174.077 26.432 173.549 28.688 172.493 30.576C171.469 32.464 169.997 33.936 168.077 34.992C166.157 36.016 163.901 36.528 161.309 36.528ZM161.309 31.056C162.973 31.056 164.285 30.464 165.245 29.28C166.237 28.096 166.733 26.272 166.733 23.808C166.733 21.344 166.237 19.536 165.245 18.384C164.285 17.232 162.973 16.656 161.309 16.656C159.645 16.656 158.317 17.232 157.325 18.384C156.365 19.536 155.885 21.344 155.885 23.808C155.885 26.272 156.365 28.096 157.325 29.28C158.317 30.464 159.645 31.056 161.309 31.056ZM187.733 36.528C185.557 36.528 183.573 36.288 181.781 35.808C179.989 35.328 178.469 34.656 177.221 33.792L179.093 28.992C180.341 29.76 181.717 30.368 183.221 30.816C184.757 31.264 186.277 31.488 187.781 31.488C189.189 31.488 190.229 31.264 190.901 30.816C191.573 30.368 191.909 29.76 191.909 28.992C191.909 28.352 191.685 27.856 191.237 27.504C190.821 27.152 190.165 26.896 189.269 26.736L184.325 25.824C182.245 25.408 180.661 24.64 179.573 23.52C178.485 22.4 177.941 20.944 177.941 19.152C177.941 17.584 178.357 16.208 179.189 15.024C180.053 13.808 181.285 12.864 182.885 12.192C184.485 11.52 186.357 11.184 188.501 11.184C190.325 11.184 192.053 11.408 193.685 11.856C195.317 12.304 196.709 12.992 197.861 13.92L195.893 18.576C194.901 17.84 193.749 17.248 192.437 16.8C191.157 16.352 189.925 16.128 188.741 16.128C187.205 16.128 186.101 16.384 185.429 16.896C184.757 17.376 184.421 18 184.421 18.768C184.421 19.344 184.613 19.824 184.997 20.208C185.413 20.592 186.037 20.88 186.869 21.072L191.861 21.984C194.005 22.368 195.637 23.088 196.757 24.144C197.877 25.2 198.437 26.656 198.437 28.512C198.437 30.208 197.989 31.648 197.093 32.832C196.197 34.016 194.933 34.928 193.301 35.568C191.701 36.208 189.845 36.528 187.733 36.528ZM214.086 36.528C210.918 36.528 208.534 35.744 206.934 34.176C205.334 32.576 204.534 30.192 204.534 27.024V17.088H199.926V11.664H204.534V5.712L211.782 3.936V11.664H218.022V17.088H211.782V26.64C211.782 28.176 212.102 29.232 212.742 29.808C213.382 30.384 214.198 30.672 215.19 30.672C215.798 30.672 216.294 30.64 216.678 30.576C217.094 30.48 217.526 30.352 217.974 30.192V35.808C217.366 36.064 216.726 36.24 216.054 36.336C215.382 36.464 214.726 36.528 214.086 36.528ZM230.718 36.528C228.542 36.528 226.558 36.288 224.766 35.808C222.974 35.328 221.454 34.656 220.206 33.792L222.078 28.992C223.326 29.76 224.702 30.368 226.206 30.816C227.742 31.264 229.262 31.488 230.766 31.488C232.174 31.488 233.214 31.264 233.886 30.816C234.558 30.368 234.894 29.76 234.894 28.992C234.894 28.352 234.67 27.856 234.222 27.504C233.806 27.152 233.15 26.896 232.254 26.736L227.31 25.824C225.23 25.408 223.646 24.64 222.558 23.52C221.47 22.4 220.926 20.944 220.926 19.152C220.926 17.584 221.342 16.208 222.174 15.024C223.038 13.808 224.27 12.864 225.87 12.192C227.47 11.52 229.342 11.184 231.486 11.184C233.31 11.184 235.038 11.408 236.67 11.856C238.302 12.304 239.694 12.992 240.846 13.92L238.878 18.576C237.886 17.84 236.734 17.248 235.422 16.8C234.142 16.352 232.91 16.128 231.726 16.128C230.19 16.128 229.086 16.384 228.414 16.896C227.742 17.376 227.406 18 227.406 18.768C227.406 19.344 227.598 19.824 227.982 20.208C228.398 20.592 229.022 20.88 229.854 21.072L234.846 21.984C236.99 22.368 238.622 23.088 239.742 24.144C240.862 25.2 241.422 26.656 241.422 28.512C241.422 30.208 240.974 31.648 240.078 32.832C239.182 34.016 237.918 34.928 236.286 35.568C234.686 36.208 232.83 36.528 230.718 36.528Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="mulish text-[#6D7D8B] text-[18px]">
          Our latest updates and blogs about managing your team
        </div>
      </div>

      <Card />
    </div>
  );
};
