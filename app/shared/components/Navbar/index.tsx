

export default function Navbar() {
  return (

    <div className="z-50 fixed w-full p-6 whitespace-nowrap">
      <nav className="w-full bg-sandi h-16 rounded-md flex justify-center text-center text-green-dark items-center px-12 z-50">
        <div className="flex flex-1 h-full font-area text-wra">
          <p className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm ">HOME</p>
          <p className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm">O NAS</p>
          <p className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm">PROJEKTY</p>
        </div>
        <div className="flex-1 flex justify-center" >
          <h1 className="text-[36px] text-center">WIECCY</h1>
        </div>
        <div className="flex-1">

        </div>
      </nav>
    </div>

  )
}
