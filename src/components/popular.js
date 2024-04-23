"use client"

import useAxios from "@/hooks/useAxios"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import ImdbRating from "@/components/imdb-rating"
import Link from "next/link"

export default function Popular() {
	const { data, loading, error } = useAxios(
		`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
	)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<section className="px-6">
			<h2 className="font-semibold text-xl mb-4">Popular</h2>
			<ul className="overflow-y-scroll snap-y max-h-[32dvh]">
				{data.results.map((movie) => (
					<li key={movie.id} className="mb-4 snap-start">
						<Link href={`/title/${movie.id}`} className="block after:clear-both after:content-[''] after:table ">
							<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={500} height={500} className="float-left mr-4 w-[6em] h-auto rounded-md" alt={`Poster for the movie ${movie.title}`} />
							<p className="text-md font-semibold">{movie.title}</p>
							<ImdbRating rating={movie.vote_average.toFixed(1)} />
							<p><FontAwesomeIcon icon={faClock} className="text-gray-500" /> {movie.runtime} minutes</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
