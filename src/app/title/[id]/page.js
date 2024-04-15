"use client"

import useAxios from "@/hooks/useAxios"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faBookmark as bookmarked } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as unbookmarked } from "@fortawesome/free-regular-svg-icons"
import { useParams } from "next/navigation"
import Genres from "@/components/genres"
import Actors from "@/components/actors"

export default function MoviePage() {
  const { id } = useParams()
  const { data, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section className="h-dvh grid grid-rows-12">
      <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} priority={true} width={500} height={500} className="w-full h-auto" alt={`Poster for the movie ${data.title}`} />
      <div className="row-start-4 row-span-9 bg-white rounded-2xl p-6 w-dvw">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <button><FontAwesomeIcon size="lg" icon={data.bookmarked ? bookmarked : unbookmarked} className="" /><span className="sr-only">Bookmark</span></button>
        </div>
        <p className="my-4 text-gray-500"><FontAwesomeIcon icon={faStar} className="text-yellow-400" /> {data.vote_average.toFixed(1)}/10 IMDB</p>
        <Genres genres={data.genres} />
        <div className="flex justify-between mb-4">
          <p className="flex flex-col items-center">
            <span className="text-gray-500">Length</span>
            <span>{data.runtime} minutes</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-gray-500">Language</span>
            <span>{data.spoken_languages[0].english_name}</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-gray-500">Release date</span>
            <span>{data.release_date}</span>
          </p>
        </div>
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="">{data.overview}</p>
        <Actors movieId={id} />
      </div>
    </section>
  )
}
