"use client"

import {createContext, useState, useEffect } from 'react';
import { IThemeContext } from '@/interfaces/theme';
import { v4 as uuidv4 } from 'uuid';

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider:any = ({children}:any) => {
  const [theme, setTheme] = useState<string>("")
  
  useEffect(() => {
    let storage: string | null = localStorage.getItem("theme")
    if(storage) setTheme(JSON.parse(storage))
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const tipsContextValue: IThemeContext = {
    theme,
    setTheme
  };
  return(
    <ThemeContext.Provider value={tipsContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}   
