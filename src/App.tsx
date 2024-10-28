import { useState } from "react";
import "./App.css";
import DiceIcon from "./assets/icon-dice.svg";

interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);

  function fetchData() {
    const url = `https://api.adviceslip.com/advice`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data as Advice);
      })
      .catch((error) => console.error("Erreur:", error));
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative max-w-sm mx-auto bg-gray-800 rounded-lg sm:max-w-lg ">
        {advice ? (
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="p-5"
          >
            <div className="p-4 font-bold text-green-300 uppercase">
              Advice # {advice.slip.id}
            </div>
            <div className="p-4 text-2xl font-bold md:text-3xl text-slate-300">
              &quot;{advice.slip.advice}&quot;
            </div>
          </div>
        ) : (
          <div className="px-10 pt-10 text-2xl font-bold min-h-32">
            Press button for random advice!
          </div>
        )}
        <div className="flex justify-center px-5 pt-5 pb-20">
          <svg
            className="md:hidden"
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <svg
            className="hidden md:block"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute w-full -bottom-9">
          <button
            aria-label="generate random advice"
            className="w-16 h-16 p-5 mx-auto transition duration-300 bg-green-300 rounded-full hover:shadow-buttonshadow hover:shadow-green-300/50"
            onClick={() => fetchData()}
          >
            <DiceIcon />
          </button>
        </div>

        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
