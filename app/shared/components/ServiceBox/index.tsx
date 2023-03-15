import { motion } from 'framer-motion'
import ParallaxBox from '../ParralaxBox'

export default function ServiceBox({ imgSrc, imgSideLeft = true, bgColor, textColor, title, subtitle }: { imgSrc: string, imgSideLeft?: boolean, bgColor: string, textColor: string, title: string, subtitle: string }) {
    return (
        <div className='w-full flex overflow-hidden'>
            <div className={`w-full md:w-1/2 flex ${!imgSideLeft && 'order-last'}`}>
                <ParallaxBox imgSrc={imgSrc} />
            </div>
            <div className={`text-${textColor} w-full md:w-1/2 bg-${bgColor} bg-bottom `} >
                <div className="px-20 py-32 z-50 ">
                    <motion.h1
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-6xl my-6">{title}</motion.h1>

                    <div className={`w-3/5 h-[1px] bg-${textColor} my-12 `}>
                        
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.3 }} className="text-lg">{subtitle} </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: '10px' }}
                        whileInView={{ opacity: 1, y: '0' }}
                        transition={{ duration: 0.5, delay: 0.35 }} className="text-sm mt-20 font-area underline-left-to-right-inverted py-2 w-max cursor">ZOBACZ WIĘCEJ</motion.p>
                </div>
            </div>
        </div>
    )
}
