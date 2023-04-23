import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className='h-full flex flex-col'>
            <div className='flex-grow grid place-items-center'>
                <Image
                    className='animate-spin'
                    src={'../svg/loading.svg'}
                    width={80}
                    height={80}
                    alt='loading'
                    priority
                />
            </div>
        </div>
    )
}
