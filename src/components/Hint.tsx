import { useState } from "react";

interface Iprops{
setHintLetter:(par:string)=>void
wordGuess:string

}

const Hint = ({setHintLetter,wordGuess}:Iprops) => {
  const [hintClicked, setHintClicked] = useState(false);
  const handleHintClick = () => {
    setHintLetter(wordGuess[Math.floor(Math.random() * wordGuess.length)]);
    setHintClicked(true);
  };
  if(hintClicked){
    return null
  
  }
  return (
    <>
        <button className="bg-slate-300 cursor-pointer hover:bg-stone-300 p-4 rounded-lg text-xl font-medium"
        onClick={handleHintClick}>Click here for Hint</button>    
    </>
  )
}
export default Hint


