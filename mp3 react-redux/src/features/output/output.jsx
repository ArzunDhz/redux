import { useSelector } from "react-redux";
import Download from '../../assets/dwn.png'
import Play from '../../assets/play.png'


const Output = () => {

    const value = useSelector( state => state.music.value)
    const title = value.title
function playMusic()
{
  var audio =   new Audio(value.link)
  audio.play()
}
  return (
    <>
<h1 className=" text-center text-white"> { title+'...'}</h1>
    <div className=" h-[100px] w-[300px] rounded-xl  bg-white  bg-opacity-40 ml-3 mt-3 flex  justify-around" >
      <a className=" mt-5" href={value.link}> <img src={Download} alt="" /></a>
      <img onClick={()=> playMusic()}  src={Play}  className=" w-[60px] h-[60px]  mt-5 " alt="" />
   </div>
    </>
  )
}

export default Output