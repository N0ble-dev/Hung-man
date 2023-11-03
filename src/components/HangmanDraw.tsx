const HEAD = (
  <div
  className=" border-[10px] border-black w-[50px] h-[50px] rounded-full absolute top-[50px] right-[-20px]"
  />
)

const BODY = (
  <div
  className="bg-black w-[10px] h-[110px] absolute top-[100px] right-[0px]"
  />
)

const RIGHT_ARM = (
  <div
  className="bg-black w-[100px] h-[10px] absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left"
  />
)

const LEFT_ARM = (
  <div
  className="bg-black w-[100px] h-[10px] absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"

  />
)

const RIGHT_LEG = (
  <div
  className="w-[100px] h-[10px] bg-black absolute top-[195px] right-[5px] rotate-[220deg] origin-bottom-right"
  />
)

const LEFT_LEG = (
  <div
  className="w-[100px] h-[10px] bg-black absolute top-[195px] right-[-95px] rotate-[-230deg] origin-bottom-left"
  />
)
const PARTS_BODY=[
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG
]
type HangManDrawProps={
  numberOfGussing:number
}
function HangManDraw({numberOfGussing}:HangManDrawProps) {
  return (
    <div className="relative">
      {PARTS_BODY.slice(0,numberOfGussing)}
      <div className="bg-black absolute right-0 top-0 h-[50px] w-[10px]  "/>
      <div className=" bg-black w-[200px] h-[10px] ml-[120px]"/>
      <div className=" h-[400px] w-[10px] bg-black ml-[120px]"/>
      <div className=" h-[10px] w-[250px] bg-black"/>
    </div>
  )
}

export default HangManDraw