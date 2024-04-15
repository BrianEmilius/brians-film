"use client"

import useAxios from "@/hooks/useAxios"
import Image from "next/image"
import Link from "next/link"
import ImdbRating from "@/components/imdb-rating"

export default function NowShowing() {
	const { data, loading, error } = useAxios(
		`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
	)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<section>
			<h2 className="pl-6 font-semibold text-xl mb-4">Now Showing</h2>
			<ul className="flex gap-4 snap-x overflow-x-scroll w-full pl-6">
				{data.results.map((movie) => (
					<li key={movie.id} className="snap-center min-w-[8.5em] last-of-type:mr-6">
						<Link href={`/title/${movie.id}`} className="flex flex-col justify-between">
							<div className="relative h-[13.5em] overflow-y-visible">
								<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={500} height={500} className="absolute w-[80%] top-[6em] left-[10%] h-[50%] rounded-md blur-lg opacity-85" alt="" />
								<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={500} height={500} className="absolute w-full h-auto rounded-md" alt={`Poster for the movie ${movie.title}`} />
							</div>
							<p className="text-md font-semibold">{movie.title}</p>
							<ImdbRating rating={movie.vote_average.toFixed(1)} />
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
