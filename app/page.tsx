import Image from 'next/image'
import { Suspense } from 'react'
import SkeletonScreen from './loading'

interface Video {
  id: string
  image: string
  title: string
  views: string
  published: string
}

async function fetchVideos() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const videos = await fetch('http://localhost:4000/tutorials').then((res) =>
    res.json()
  )
  return videos
}

export default async function Home() {
  const videos: Video[] = await fetchVideos()

  return (
    <>
      {videos.map((video, index) => (
        <li className='mb-6' key={index}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-80'
          >
            <Image
              src={video.image}
              alt={video.title}
              width={420}
              height={200}
              className='mb-4 rounded-md'
            />
            <h4>{video.title}</h4>
            <div>
              {video.views} &bull; {video.published}
            </div>
          </a>
        </li>
      ))}
    </>
  )
}
