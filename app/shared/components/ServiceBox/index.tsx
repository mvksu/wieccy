import { motion } from 'framer-motion'
import backImg from "../../../images/backImg.svg"
import mainImg from "../../../images/img1.svg"
import ParallaxBox from '../ParralaxBox'

export default function ServiceBox({imgSrc, imgSideLeft = true} : {imgSrc: string, imgSideLeft?: boolean}) {
    return (
        <div className='w-full flex overflow-hidden'>
            <div className={`w-1/2 flex ${!imgSideLeft && 'order-last'}`}>
            <ParallaxBox imgSrc={mainImg}/>
            </div>
            <div className="text-green-dark w-1/2 bg-green-main bg-bottom" style={{ backgroundImage: `url(${backImg})` }}>
                <div className="px-20 py-32 z-50">
                    <motion.h1
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-6xl my-6">Piękno natury w twoim ogrodzie.</motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.25 }} className="text-xl my-10">OGRODNICTWO TRADYCYJNE WIECCY</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.3 }} className="text-lg">Ogrodnictwo Tradycyjne Wieccy to firma z ponad 100-letnim doświadczeniem w projektowaniu, tworzeniu i pielęgnacji pięknych ogrodów. </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.35 }} className="text-sm mt-20 font-area underline-left-to-right-inverted py-2 w-max cursor">ZOBACZ WIĘCEJ</motion.p>
                </div>
            </div>
        </div>
    )
}
