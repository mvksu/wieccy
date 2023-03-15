import React, { useEffect, useRef, useState } from 'react';
import HomeProductCard from '../HomeProductCard';
import { AnimatePresence, motion } from 'framer-motion';

const NUM_VISIBLE_ITEMS = 3;

const items = [1, 2, 3, 4, 5];

type Props = {};

type State = {
    current: number;
};

const sliceWrap = (array: number[], startIndex: number, endIndex: number) => {
    const length = array.length;

    if (startIndex < 0) {
        startIndex = length + startIndex;
    }

    if (endIndex < 0) {
        endIndex = length + endIndex;
    }

    if (endIndex <= startIndex) {
        endIndex = length + endIndex;
    }

    const slicedArray = array.slice(startIndex, endIndex);

    if (endIndex > length) {
        slicedArray.push(...array.slice(0, endIndex - length));
    }

    return slicedArray;
};

const Carousel: React.FC<Props> = () => {
    const [current, setCurrent] = useState<State['current']>(0);
    const [carouselDir, setCarouselDir] = useState(1);
    const [childWidth, setChildWidth] = useState(0);
    const childRef = useRef<HTMLDivElement>(null);

    const itemsLength = items.length;

    const visibleItemsStart = current % itemsLength;
    const visibleItemsEnd = (visibleItemsStart + NUM_VISIBLE_ITEMS) % itemsLength;
    const visibleItems = sliceWrap(items, visibleItemsStart, visibleItemsEnd);

    const handleNextClick = () => {
        setCarouselDir(1);
        setCurrent((current + 1) % itemsLength);
    };

    const handlePrevClick = () => {
        setCarouselDir(-1);
        setCurrent((current - 1) % itemsLength);
    };

    useEffect(() => {
        if (childRef.current) {
            setChildWidth(childRef.current.offsetWidth);
        }
    }, [childRef]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrent(current => current + 1);
        }, 5000);
    
        // Return a function from useEffect to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

    return (
        <AnimatePresence mode='popLayout'>
            <button onClick={handleNextClick}>+</button>
                <button onClick={handlePrevClick}>-</button>
            <h1>{carouselDir > 0 ? 'lewo' : 'prawo'}</h1>

            <motion.div
                className='grid grid-cols-3 justify-center items-center overflow-hidden'
                initial={{ x: childWidth * (carouselDir), y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                exit={{ x: childWidth * -(carouselDir), opacity: 1 }}
                drag
                transition={{ duration: 1 }}
                key={current}>
                
                {visibleItems.map((card, index) => (
                    <div ref={childRef} key={index} className='flex justify-center items-center'>
                        <HomeProductCard title={card.toString()} key={index}/>
                    </div>
                ))}

            </motion.div>
        </AnimatePresence>
    );
};

export default Carousel;