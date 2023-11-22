"use client"

import styled from "styled-components"

import Image from "next/image"

export default function Header() {
  return (
    <Wrapper className='flex shadow-lg h-[75vh] text-9xl font-bold items-center justify-center'>
      <h1 className="absolute">Título</h1>
      <div className="cell bg-[url('/img/home-img1.jpg')] bg-cover bg-[20%]">
        <div className="backdrop-brightness-75 shadow"></div>
      </div>
      <div className="cell bg-[url('/img/home-img2.jpg')] bg-cover bg-[20%]">
        <div className="backdrop-brightness-75 shadow"></div>
      </div>
      <div className="cell bg-[url('/img/home-img3.jpg')] bg-cover bg-[20%] ">
        <div className="backdrop-brightness-75 shadow"></div>
      </div>
      <div className="cell bg-[url('/img/home-img4.jpg')] bg-cover bg-[20%]">
        <div className="backdrop-brightness-75 shadow"></div>
      </div>
      <div className="cell bg-[url('/img/home-img1.jpg')] bg-cover bg-[20%]">
        <div className="backdrop-brightness-75 shadow"></div>
      </div>
      
    </Wrapper>
  )
}


const Wrapper = styled.header`
  div{
    height: 100%;
    width: 100%;
    transition: 0.2s;
    border: solid 1px black;
    overflow: hidden;
  }

  div:hover{
    width: 150%;
  }

  .shadow {
    transition: 0.5s;
  }

  .shadow:hover {
    backdrop-filter: brightness(1);
  }
`