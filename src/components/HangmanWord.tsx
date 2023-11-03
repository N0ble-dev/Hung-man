
type HangmanWordProps={
  userLetterChosen:string[];
  trueWord:string;
  isLoser:boolean;
}
function HangmanWord({userLetterChosen,trueWord,isLoser}:HangmanWordProps) {

  return (
    <div className=" flex gap-2 text-4xl font-bold uppercase">
      {trueWord.split("").map((letter,index) => (
        <span className=" border-b-2 border-black " key={index}>
          <span style={{ visibility: userLetterChosen.includes(letter)||isLoser ? "visible" : "hidden", color: isLoser&&!userLetterChosen.includes(letter)?"red":"black"}}>
            {letter}
            </span>
        </span>
      )
      )}
    </div>
  )
}

export default HangmanWord      