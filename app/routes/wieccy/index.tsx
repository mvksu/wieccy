import { Parallax } from "react-scroll-parallax";
import mainImg from "../../images/img1.svg"
import backImg from "../../images/backImg.svg"
import Footer from "~/shared/components/Footer";
import { motion } from "framer-motion"


export default function HomeRoute() {
    return (
        <div>
            <div className="-z-50 overflow-hidden flex flex-col md:flex-row max-w-screen">
                <motion.div className=" bg-green-dark w-full md:w-5/12"
                    initial={{ opacity: 0.15, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <Parallax speed={-10}>
                        <img src={mainImg} alt="" className="z-0 h-[700px] object-cover scale-105" />
                    </Parallax>
                </motion.div>
                <div className="text-green-dark w-full md:w-7/12 max-w-screen bg-green-main relative bg-bottom" style={{ backgroundImage: `url(${backImg})` }}>
                    <div className="px-20 py-32 z-50">
                        <motion.h1
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.5}}
                            className="text-6xl my-6">Piękno natury w twoim ogrodzie.</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.55}} className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.6}} className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: '10px' }}
                            animate={{ opacity: 1, y: '0' }}
                            transition={{ duration: 0.5, delay: 0.65}} className="text-sm mt-20 font-area underline-left-to-right-inverted py-2 w-max cursor">ZOBACZ WIĘCEJ</motion.p>
                    </div>
                </div>
            </div>
            <div className="h-100 p-24 flex justify-between">
                <div className="h-[545px] w-[327px] flex flex-col justify-center items-center">
                    <div className="bg-dark-sandi h-3/4 w-full mx-8 rounded"></div>
                    <h1 className="pt-8 pb-4 text-3xl">Title</h1>
                    <h2 className="text-xl py-1 w-max underline-left-to-right-inverted">Subtitle</h2>
                </div>
                <div className="h-[545px] w-[327px] flex flex-col justify-center items-center">
                    <div className="bg-dark-sandi h-3/4 w-full mx-8"></div>
                    <h1 className="pt-8 pb-4 text-3xl">Title</h1>
                    <h2 className="text-xl py-1 w-max underline-left-to-right-inverted">Subtitle</h2>
                </div>
                <div className="h-[545px] w-[327px] flex flex-col justify-center items-center">
                    <div className="bg-dark-sandi h-3/4 w-full mx-8"></div>
                    <h1 className="pt-8 pb-4 text-3xl">Title</h1>
                    <h2 className="text-xl py-1 w-max underline-left-to-right-inverted">Subtitle</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}
