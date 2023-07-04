import { ITipProp } from "@/interfaces/tips";
import { TipsContext } from '@/hooks/useTips'
import CloseButton from "./closeButton";

import { useContext } from "react";

export default function Tip (prop:ITipProp) {
  const deleteFunction  = useContext(TipsContext)?.deleteTip
 return(
  <div className='odd:bg-blue-200 border border-black even:bg-blue-300 p-4 rounded flex justify-between place-items-center'>
    <div>
      <p>{prop.info.title}</p>
      <span>{prop.info.content}</span>
    </div>
    <CloseButton style="hover:scale-150 transition cursor-pointer" function={deleteFunction? () => deleteFunction(prop.info.id) : () => false}/>
   </div>
 )
}