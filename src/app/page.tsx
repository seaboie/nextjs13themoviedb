import { Inter } from 'next/font/google'
import ButtonPrimary from '@/components/button/ButtonPrimary'
import { ModelData } from '@/models/modelResult';
import Movie from './Movie';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const urlString = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;

  const datas = await fetch(urlString);
  const res: ModelData = await datas.json();
  
  return (
    <main className='w-screen h-full'>
      <div className='grid place-items-center'>
        <h1 className='text-4xl my-3'>Hello Next 13 🔥</h1>
        <ButtonPrimary title='Go to About Page' route='/web/about' />

        <div className='flex flex-col w-screen p-16'>
          <div className='grid gap-16 grid-cols-fluid flex-grow'>

            {
              res.results.map((result) => (
                <Movie key={result.id} id={result.id} title={result.title} poster_path={result.poster_path} release_date={result.release_date}/>
              ))
            }

          </div>
        </div>
      </div>
    </main>
  )
}
