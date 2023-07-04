import Navbar from "./navbar"

export default function Header() {
  return (
    <header className='bg-blue-700 shadow-md flex place-items-center justify-between p-4'>
      <h1 className='text-white text-4xl animate-bounce transition delay-75'>Pretty Tail</h1>
      <Navbar/>
    </header>
  )
}