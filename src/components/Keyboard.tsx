const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  addGusedLetter: (letter: string) => void;
  inActiveLetters: string[];
  activeLetters: string[];
  disabled?:boolean
};
function Keyboard({
  addGusedLetter,
  inActiveLetters,
  activeLetters,
  disabled
}: KeyboardProps) {
  
  return (
    <div className="keyboard grid grid-cols-5 gap-4 relative">
      {keys.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        const dynamicClasses = ` text-black rounded-full w-14 h-14 flex items-center justify-center text-3xl uppercase transform transition-transform hover:scale-105 disabled:bg-slate-800 disabled:cursor-not-allowed ${
          isActive?'bg-red-200 hover:bg-red-300 cursor-none':"bg-slate-300 cursor-pointer hover:bg-stone-300"
        }`;
        
        return (
          <button
            disabled={ isInActive||disabled}
            onClick={() => addGusedLetter(key)}
            key={index}
            className={dynamicClasses}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;



