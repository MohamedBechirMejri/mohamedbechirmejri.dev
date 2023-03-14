const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-center justify-between p-4 text-xl text-[#1f1818] sm:left-0 sm:-translate-x-0">
      <div className="flex items-center justify-center gap-4 sm:gap-2 sm:flex-col">
        {/* Gmail */}
        <a
          href="mailto:mohamedbechirmejri.dev@gmail.com"
          className="brightness-0 transition-all hover:brightness-100"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.58 19.107 3.89 11.03a3 3 0 0 1 3.22-5.06l9.31 5.924 8.36-5.851a3 3 0 0 1 3.44 4.915Z"
              fill="#ea4435"
            />
            <path
              d="M27.5 26.5h-4v-18a3 3 0 0 1 3-3 3 3 0 0 1 3 3v16a2 2 0 0 1-2 2Z"
              fill="#00ac47"
            />
            <path
              d="M29.456 8.066c-.009-.06-.008-.122-.02-.182-.02-.091-.055-.176-.083-.265a2.931 2.931 0 0 0-.096-.3c-.02-.047-.05-.088-.073-.134a2.984 2.984 0 0 0-.215-.385c-.04-.058-.09-.108-.135-.163a3.028 3.028 0 0 0-.245-.285c-.067-.064-.142-.118-.215-.177a3.02 3.02 0 0 0-.24-.185c-.079-.052-.166-.092-.25-.136-.088-.046-.175-.097-.267-.133-.089-.036-.183-.059-.276-.086s-.186-.06-.281-.078a3.054 3.054 0 0 0-.357-.036c-.076-.005-.151-.019-.227-.018a2.978 2.978 0 0 0-.422.043c-.056.008-.113.007-.17.019a33.211 33.211 0 0 0-.564.178c-.051.022-.096.055-.146.08A2.901 2.901 0 0 0 23.5 8.5v5.762l4.72-3.304a2.888 2.888 0 0 0 1.236-2.893Z"
              fill="#ffba00"
            />
            <path
              d="M5.5 5.5a3 3 0 0 1 3 3v18h-4a2 2 0 0 1-2-2v-16a3 3 0 0 1 3-3Z"
              fill="#4285f4"
            />
            <path
              d="M2.544 8.066c.009-.06.008-.122.02-.182.02-.091.055-.176.083-.265a2.931 2.931 0 0 1 .096-.299c.02-.048.05-.09.073-.135a2.972 2.972 0 0 1 .216-.385c.04-.058.09-.108.134-.163a3.027 3.027 0 0 1 .245-.285c.067-.064.142-.118.215-.177a3 3 0 0 1 .24-.185c.08-.052.166-.092.25-.136a2.975 2.975 0 0 1 .267-.134c.089-.036.184-.059.277-.086s.185-.06.28-.078a3.057 3.057 0 0 1 .357-.036c.076-.005.151-.018.228-.018a2.976 2.976 0 0 1 .421.043c.057.008.113.008.17.02a2.906 2.906 0 0 1 .285.088 2.916 2.916 0 0 1 .279.09c.051.021.096.054.146.079a2.974 2.974 0 0 1 .375.21A2.994 2.994 0 0 1 8.5 8.5v5.762l-4.72-3.304a2.89 2.89 0 0 1-1.236-2.892Z"
              fill="#c52528"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/mohamedbechirmejri/"
          target="_blank"
          rel="noreferrer"
          className="brightness-0 transition-all hover:brightness-100"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#0A66C2"
              d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
            />
          </svg>
        </a>

        {/* Github */}
        <a
          href="https://github.com/MohamedBechirMejri"
          target="_blank"
          rel="noreferrer"
          className="brightness-0 transition-all hover:brightness-100"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
              fill="#fff"
            />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/MohamedBechirMejri"
          target="_blank"
          rel="noreferrer"
          className="brightness-0 transition-all hover:brightness-100"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#1877F2"
              d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
            />
            <path
              fill="#ffffff00"
              d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
            />
          </svg>
        </a>

        {/* Discord */}
        <a
          href="https://discordapp.com/users/795500416116195359"
          target="_blank"
          rel="noreferrer"
          className="brightness-0 transition-all hover:brightness-100"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 -28.5 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="#5865F2"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </a>
      </div>

      {/*
       <p className="flex select-none items-center gap-2 text-sm font-extrabold">
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Source Code
        </a>
        •<span> 2023</span>
      </p>
      */}
    </footer>
  );
};

export default Footer;
