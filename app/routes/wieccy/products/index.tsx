import React from 'react'
import productsImg from "../../../images/products.svg"
import { Parallax } from "react-scroll-parallax";
import ProductCard from '~/shared/components/ProductCard';

const items = [1, 2, 3, 4, 5, 6, 7]


export default function ProductsRoute() {
  return (
    <div className='bg-sandi'>
      <div className='bg-green-main relative'>
        <img src={productsImg} className="object-top object-none" alt="" />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-8'>
          <h3 className='text-sandi text-lg text-white text-center'>ARTYKUŁY OGRODNICZNE</h3>
          <h2 className='text-5xl text-sandi text-center'>Zobacz nasze najlepsze produkty!</h2>
        </div>
      </div>

      <div className=' bg-sandi grid grid-cols-3 place-items-center  p-8'>
        {items.map(item => (
          <ProductCard title='pro' subtitle='sub' key={item}/>))}
      </div>
    </div>
  )
}
