import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import HangManDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from './components/Keyboard';
import words from './wordList.json'
import './index.css'
import Hint from "./components/Hint";

function App() {
  const [wordGuess]=useState(()=>{
  return words[Math.floor(Math.random()*words.length)]
  })
  const [hintLetter,setHintLetter]=useState("")

  const [guessedLetters,setguessedLetters]=useState<string[]>([])   



  const inCorrectLetters=guessedLetters.filter(
    letter=>!wordGuess.includes(letter)
  )


  const isLoser:boolean=inCorrectLetters.length >= 6
  const isWinner:boolean=wordGuess.split("").every((letter)=>guessedLetters.includes(letter))


  const addGusedLetter= useCallback((letter:string)=>{

    if (guessedLetters.includes(letter)||isLoser||isWinner) return

    setguessedLetters(currentLetters=>[...currentLetters,letter])
  
  },[guessedLetters,isLoser,isWinner])

useEffect(() => {
  const handler = (e: KeyboardEvent):void=> {
    const key = e.key;

    if (!key.match(/^[a-z]$/)) return;

    e.preventDefault();

    addGusedLetter(key)
  };
  document.addEventListener("keypress", handler as unknown as EventListener);

  return () => {
    document.removeEventListener("keypress", handler as unknown as EventListener);
  };
}, [addGusedLetter]);

  
  return (
    
    <div
      className="max-w-[800px] flex flex-col gap-6 mx-auto my-0 items-center"
    >
      <div className="text-4xl text-center">Guess the programing languge Name</div>
  <div className="text-3xl text-center">{isWinner?"Congratulation WINNER! Refresh to play again":isLoser?"Nice try- Refresh to try again":""}</div>
      <HangManDraw  numberOfGussing={inCorrectLetters.length}/>
      <HangmanWord hintLetter={hintLetter} isLoser={isLoser} userLetterChosen={guessedLetters} trueWord={wordGuess} />
      <Keyboard hintLetter={hintLetter} disabled={isLoser||isWinner} addGusedLetter={addGusedLetter} inActiveLetters={inCorrectLetters}
      activeLetters={guessedLetters.filter((letter)=>{
        return wordGuess.includes(letter)
      })}
      />
      <Hint setHintLetter={setHintLetter} wordGuess={wordGuess}/>
    </div>
  );
}

export default App;


