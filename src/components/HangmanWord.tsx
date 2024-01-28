
type HangmanWordProps={
  userLetterChosen:string[];
  trueWord:string;
  isLoser:boolean;
  hintLetter:string
}
function HangmanWord({userLetterChosen,trueWord,isLoser,hintLetter}:HangmanWordProps) {

  return (
    <div className=" flex gap-2 text-4xl font-bold uppercase">
      {trueWord.split("").map((letter,index) => (
        <span className=" border-b-2 border-black " key={index}>
          <span style={{ visibility: (userLetterChosen.includes(letter)||isLoser)||(letter===hintLetter) ? "visible" : "hidden", color: isLoser&&!userLetterChosen.includes(letter)?"red":"black"}}>
            {letter}
            </span>
        </span>
      )
      )}
    </div>
  )
}

export default HangmanWord      