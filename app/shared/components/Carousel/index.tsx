import React, { useState } from 'react'
import HomeProductCard from '../HomeProductCard'

const items = [1, 2, 3, 4, 5];

export default function Carousel() {
    const [itemsActive, setItemsActive] = useState();
    // []

    return (
        <div className='flex justify-between'>
            <HomeProductCard title="Pro" />
            <HomeProductCard />
            <HomeProductCard />
        </div>
    )
}
