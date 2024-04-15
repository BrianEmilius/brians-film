"use client"

import useAxios from "@/hooks/useAxios"
import Image from "next/image"

export default function Actors({ movieId }) {
	const { data, loading, error } = useAxios(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
	)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<section>
			<h2 className="font-semibold text-xl mb-4">Cast</h2>
			<ul className="flex gap-8 snap-x overflow-x-scroll">
				{data.cast.map((actor) => (
					<li key={actor.id} className="snap-center min-w-[4em]">
							<div className="w-20 h-20 overflow-hidden rounded-md">
								<Image src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} width={500} height={500} className="w-full h-auto object-cover" alt={`Photo of ${actor.name}`} />
							</div>
							<p className="text-center text-sm">{actor.name}</p>
					</li>
				))}
			</ul>
		</section>
	)
}