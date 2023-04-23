import Link from 'next/link'
import React from 'react'

type ButtonPrimaryProps = {
    title: string,
    route: string
}

export default function ButtonPrimary({title, route}: ButtonPrimaryProps) {
    return (
        <div className='mx-auto w-3/4 h-10 bg-blue-700 my-4 rounded-lg cursor-pointer'>
            <Link className='w-full h-full grid place-items-center text-white text-2xl px-4' href={route}>
                {title}
            </Link>
        </div>
    )
}
