import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type MovieProps = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string
}

export default function Movie({id, title, release_date, poster_path }: MovieProps) {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    return (
        <div className=' h-fit rounded-xl p-5 bg-slate-300'>
            <h1>{title}</h1>
            <h2>Release date: {release_date}</h2>


            <div className='m-4 p-2 bg-slate-400 rounded-xl'>
                <Link href={`/web/${id.toString()}`}>
                    <Image
                        className='rounded-xl'
                        src={imagePath + poster_path}
                        width={80}
                        height={1600}
                        alt={title}
                        style={{ height: 'auto', width: '100%' }}
                        priority
                    />
                </Link>
            </div>
        </div>
    )
}
