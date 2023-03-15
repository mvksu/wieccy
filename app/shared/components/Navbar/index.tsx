import { Link } from "@remix-run/react"



const navVariant = {
  open: { y: 0 },
  closed: { y: "-250px" },
}

export default function Navbar() {


  return (
    <div  className="sticky top-0 z-[500]">
      <div
        className={`absolute w-full p-6 whitespace-nowrap`}>
        <nav className="w-full bg-sandi h-16 rounded-md flex justify-center text-center text-green-dark items-center px-12 z-50">
          <ul className="flex flex-1 h-full font-area text-wra">
            <Link to="/wieccy" className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm ">HOME</Link>
            <Link to="/wieccy/onas" className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm">O NAS</Link>
            <Link to="/wieccy/projekty" className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm">PROJEKTY</Link>
            <Link to="/wieccy/products" className="mr-8 underline-left-to-right items-center flex cursor-pointer text-sm">PRODUKTY</Link>
          </ul>
          <div className="flex-1 flex justify-center" >
            <h1 className="text-[36px] text-center">WIECCY</h1>

          </div>
          <div className="flex-1">

          </div>
        </nav>
      </div>
    </div>
  )
}
