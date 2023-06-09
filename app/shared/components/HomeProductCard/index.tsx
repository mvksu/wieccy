
import React from 'react'

export default function HomeProductCard({ title = 'Title', subtitle = 'subtitle', key }: { key: any, title?: string, subtitle?: string }) {
    return (
        <div
            className="h-[545px] w-[327px] flex flex-col justify-center items-center" key={key} >
            <div className="bg-dark-sandi h-3/4 w-full"></div>
            <h1 className="pt-8 pb-4 text-3xl">{title}</h1>
            <h2 className="text-xl py-1 w-max underline-left-to-right-inverted">{subtitle}</h2>
        </div>
    )
}
