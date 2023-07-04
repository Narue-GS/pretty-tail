'use client'

import { useContext, useState } from "react"

import { v4 } from "uuid"

import { TipsContext } from "@/hooks/useTips"

export default function TipMenu() {
  const addTip = useContext(TipsContext)?.addTip
  let defaultTip = {
    title:"",
    content:"",
    id: v4()
  }

  const checkAndInsert = () => {
    const insert = addTip? addTip(newTip) : false
    insert? setNewTip(defaultTip) : alert("Dica inválida")  
  }

  const [newTip, setNewTip] = useState(defaultTip)
  return (
    <div className='rounded'>
      <button
        className={`
          bg-blue-700 ${newTip?`text-white` : 'text-gray-400'}
          p-2
          ${newTip?`hover:scale-110` : ''}
          rounded
          transition
        `}
        onClick={() => checkAndInsert()}>
        new +
      </button>
      <input 
        type="text"
        id='input'
        onChange={(e) =>{setNewTip({...newTip, title: e.target.value})}}
        className={`
          bg-blue-200
          text-black
          ${!newTip?'tracking-decorative':''}
          outline-none
          p-2
        `}
        placeholder={`${newTip.title? 'Conteúdo' : 'Título'}`}
      />
    </div>
  )
}