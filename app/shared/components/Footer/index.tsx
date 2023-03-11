import leaf from "~/images/leaf.svg"
import logo from "~/images/logo.svg"

export default function Footer() {
    return (
        <div className='bg-sandi h-[700px] flex flex-col justify-between'>
            <div className="p-24 flex justify-between font-area text-green-dark list-none">
                <div className="">
                    <h1 className="text-xl py-4">NA SKRÓTY</h1>
                    <li className="py-4">HOME</li>
                    <li className="py-4">O FIRME</li>
                    <li className="py-4">GODZINY OTWARCIA</li>
                    <li className="py-4">OFERTY</li>
                    <li className="py-4">PROMOCJE</li>
                    <li className="py-4">AKTUALNOŚĆI</li>
                    <li className="py-4">POLITYKA PRYWATNOŚCI</li>
                </div>
                <div>
                    <h1 className="text-xl py-4">KONTAKT</h1>
                    <li className="py-4">+48 533 643 011</li>
                    <li className="py-4">BRUSY</li>
                    <li className="py-4">UL. JANA PAWŁA 2</li>
                    <li className="py-4">WIECCY@WP.PL</li>
                </div>
                <div>
                    <h1 className="text-xl">SKONTAKTUJ SIĘ Z NAMI</h1>
                    <input type="text" className=" px-6 py-4 my-8  rounded-3xl bg-sandi border-2 border-dark-green" />
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='bg-green-dark flex animateMarquee'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(leafID => (
                    <div key={leafID} className={`mx-4 -my-10`}>
                        <img src={leaf} alt="">
                        </img>
                    </div>))}
            </div>

        </div>
    )
}
