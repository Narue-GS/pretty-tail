"use client"

import {createContext, useState, useEffect } from 'react';
import { ITip, ITipsContext } from '@/interfaces/tips';

export const TipsContext = createContext<ITipsContext | null>(null)

export const TipsProvider:any = ({children}:any) => {
  const [tips, setTips] = useState<ITip[]>([])

  const deleteTip = (id:string) => {
    try{
      setTips(tips.filter(tip => tip.id != id))
      return true
    }
    catch(e){
      console.log(e);
      return false
    }
  }

  const addTip = (tip:ITip) => {
    try {
      if(tip.title) setTips(tips.concat(tip))
      else throw new Error("empty tip")
      return true
    }
    catch(e) {
      console.log(e);
      return false
    }
  }

  useEffect(() => {
    let storage: string | null | ITip[] = localStorage.getItem("tips")
    if(storage) setTips(JSON.parse(storage))
  }, [])

  useEffect(() => {
    localStorage.setItem('tips', JSON.stringify(tips))
  }, [tips])

  const tipsContextValue: ITipsContext = {
    tips,
    setTips,
    deleteTip,
    addTip
  };
  return(
    <TipsContext.Provider value={tipsContextValue}>
      {children}
    </TipsContext.Provider>
  )
}   
