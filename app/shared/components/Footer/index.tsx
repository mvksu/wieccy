import { Link } from "@remix-run/react"
import leaf from "~/images/leaf.svg"
import logo from "~/images/logo.svg"


export default function Footer() {
    return (
        <div className='bg-sandi flex flex-col justify-between'>
            <div className="p-24 flex-col md:flex-row flex justify-between font-area text-green-dark list-none">
                <div className="mt-8 flex flex-col">
                    <h1 className="text-xl py-4">NA SKRÓTY</h1>
                    <Link to={"/"} className="py-4">HOME</Link>
                    <Link to={"/"} className="py-4">O FIRME</Link>
                    <Link to={"/"} className="py-4">USŁUGI</Link>
                    <Link to={"/"} className="py-4">AKTUALNOŚĆI</Link>
                    <Link to={"/"} className="py-4">POLITYKA PRYWATNOŚCI</Link>
                </div>
                <div className="mt-8">
                    <div>
                        <h1 className="text-xl py-4">KONTAKT</h1>
                        <li className="py-4">+48 533 643 011</li>
                        <li className="py-4">UL. JANA PAWŁA 2, BRUSY</li>
                        <li className="py-4">WIECCY@WP.PL</li>
                    </div>
                    <div>
                        <h1 className="text-xl py-4">KONTAKT</h1>
                        <li className="py-4">+48 533 643 011</li>
                        <li className="py-4">UL. JANA PAWŁA 2, BRUSY</li>
                        <li className="py-4">WIECCY@WP.PL</li>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="text-xl  py-4">SKONTAKTUJ SIĘ Z NAMI</h1>
                    <input type="text" className=" px-6 py-3 my-8  rounded-3xl bg-sandi border-2 border-dark-green" />
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='bg-green-dark h-36 flex'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(leafID => (
                    <div key={leafID} className={`mx-4 -translate-y-12`}>
                        <img src={leaf} alt="">
                        </img>
                    </div>))}
            </div>

        </div>
    )
}
