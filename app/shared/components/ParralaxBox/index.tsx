import { motion } from 'framer-motion';
import { Parallax } from "react-scroll-parallax";

export default function ParallaxBox({ imgSrc }: { imgSrc: string }) {
    return (
        <motion.div className=" bg-green-dark w-full h-full top-0"
            initial={{ opacity: 0.15, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>
            <Parallax speed={-10} className='w-full h-full object-fill scale-110'>
                <img src={imgSrc} alt="" className="z-0 w-full h-full object-cover" />
            </Parallax>
        </motion.div>
    )
}
