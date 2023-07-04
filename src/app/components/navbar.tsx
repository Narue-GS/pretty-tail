'use client'

import { useContext } from "react"

import { ThemeContext } from "@/hooks/useTheme"

export default function Navbar() {
  const theme = useContext(ThemeContext)
  return (
    <nav className='text-white flex place-itens-center gap-5'>
    <div className='flex place-itens-center px-2'>
      <a className='hover:scale-110 hover:bg-blue-600 p-2 rounded transition' href="">Link 1</a>
      <a className='hover:scale-110 hover:bg-blue-600 p-2 rounded transition' href="">Link 1</a>
      <a className='hover:scale-110 hover:bg-blue-600 p-2 rounded transition' href="">Link 1</a>
    </div>
    <div>
      <button
        className={`
          flex place-items-center 
          p-2 
          hover:scale-110 ${!theme?.theme? 'hover:bg-blue-950 hover:text-cyan-300'  : 'hover:bg-white hover:text-cyan-500'} 
          transition
          rounded
        `}
        onClick={() => {
            theme?.theme? theme.setTheme('') : theme?.setTheme('dark')
          }
        }>
        {theme?.theme? 'light' : 'dark'} mode
      </button>
    </div>
  </nav>
  )
}