'use client'

import { useContext } from "react";

import { ThemeContext } from "@/hooks/useTheme";
import { TipsContext } from "@/hooks/useTips";
import Tip from "./tip";
import TipMenu from "./tipMenu";

export default function TipsList() {
  const theme = useContext(ThemeContext)
  const tips = useContext(TipsContext)
  return (
    <main className={`
        flex  justify-center 
        py-10
        min-h-full
        ${theme?.theme === 'dark'? 'bg-blue-950' : ''}
        transition
      `}>
        <section className='w-1/2 rounded' >
          <TipMenu/>
          <div className='border-black mt-2'>
            {tips?.tips.map(tip => (
              <Tip key={tip.id} info={tip}/>
            ))}
          </div>
        </section>
      </main>
  )
}