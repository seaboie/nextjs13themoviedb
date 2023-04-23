import Loading from '@/app/loading';
import { ModelResult } from '@/models/modelResult';
import Image from 'next/image';
import React, { Suspense } from 'react'

interface ParamsType {
  movieId: number
}

interface MovieDetailProps {
  params: ParamsType
}

export default async function MovieDetail({ params }: MovieDetailProps) {

  const urlString = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.API_KEY}`;
  const imagePath = 'https://image.tmdb.org/t/p/original';

  const results = await fetch(urlString);
  const datas: ModelResult = await results.json();

  return (
    <div className='w-full h-full grid place-items-center pb-20 pt-12'>
      <div className='w-2/3'>
        <h2 className='text-5xl mb-3'>{datas.title}</h2>
        <h2 className='text-lg'>{datas.release_date}</h2>
        <h2>{`Run Time: ${datas.runtime} minutes`}</h2>
        <h2 className='my-4 py-1 px-4 bg-green-600 rounded-md inline-block text-white'>{datas.status}</h2>

        <Suspense fallback={<Loading />}>
          <Image
            className='rounded-2xl'
            src={imagePath + datas.backdrop_path}
            width={200}
            height={200}
            alt={datas.title}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Suspense>

        <p className='m-12 text-2xl'>{datas.overview}</p>
      </div>
    </div>
  )
}


