
import mainImg from "../../images/img1.svg"
import backImg from "../../images/backImg.svg"
import Footer from "~/shared/components/Footer";
import { motion } from "framer-motion"
import ParallaxBox from "~/shared/components/ParralaxBox";
import ServiceBox from '../../shared/components/ServiceBox/index';
import Carousel from "~/shared/components/Carousel";


export default function HomeRoute() {
    return (
        <div>
            <div className="-z-50 overflow-hidden flex flex-col md:flex-row max-w-screen">
                <div className="">
                    <ParallaxBox imgSrc={mainImg} />
                </div>
                <div className="text-green-dark w-full md:w-7/12 max-w-screen bg-green-main relative bg-bottom" style={{ backgroundImage: `url(${backImg})` }}>
                    <div className="px-20 py-32 z-50">
                        <motion.h1
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-6xl my-6">Piękno natury w twoim ogrodzie.</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.55 }} className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.6 }} className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.65 }} className="text-sm mt-20 font-area underline-left-to-right-inverted py-2 w-max cursor">ZOBACZ WIĘCEJ</motion.p>
                    </div>
                </div>
            </div>
            <div className=" p-24 bg-sandi">

                <Carousel />
            </div>
            <div>
                <ServiceBox imgSrc={mainImg} />
                <ServiceBox imgSrc={mainImg} imgSideLeft={false}/>
            </div>
            <Footer />
        </div>
    )
}
