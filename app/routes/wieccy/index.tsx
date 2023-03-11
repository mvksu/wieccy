
import { Parallax } from "react-scroll-parallax";
import mainImg from "../../images/img1.svg"
import backImg from "../../images/backImg.svg"
import Footer from "~/shared/components/Footer";



export default function HomeRoute() {
    return (
        <div>
            <div className="-z-50 overflow-hidden flex flex-col md:flex-row max-w-screen">
                <div className=" bg-green-dark w-full md:w-5/12">
                    <Parallax speed={-10}>
                        <img src={mainImg} alt="" className="z-0 h-[700px] object-cover scale-105" />
                    </Parallax>
                </div>
                <div className="text-green-dark w-full md:w-7/12 max-w-screen bg-green-main relative bg-bottom" style={{backgroundImage: `url(${backImg})`}}>
                    <div className="px-20 py-32 z-50">
                        <h1 className="text-6xl my-6">Piękno natury natury w twoim ogrodzie.</h1>
                        <h2 className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</h2>
                        <p className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </p>

                        <p className="text-sm mt-20 font-area">ZOBACZ WIĘCEJ</p>
                    </div>
                </div>
            </div>
            {/* <div className="bg-green-main h-[632px]-z-50 flex">
                <div className="overflow-hidden h-full w-full">
                        <img src={mainImg} alt="" className="z-0 h-full " />

                </div>
                <div className="text-green-dark py-36 pl-12 pr-24">
                    <h1 className="text-6xl my-6">Piękno natury natury w twoim ogrodzie.</h1>
                    <h2 className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</h2>
                    <p className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </p>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}
