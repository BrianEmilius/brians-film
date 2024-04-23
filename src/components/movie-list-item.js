"use client"

import Image from "next/image"
import ImdbRating from "./imdb-rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function MovieListItem({ movie }) {
	return (
		<li key={movie.id} className="mb-4 snap-start">
			<Link href={`/title/${movie.id}`} className="block after:clear-both after:content-[''] after:table ">
				<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={500} height={500} className="float-left mr-4 w-[6em] h-auto rounded-md" alt={`Poster for the movie ${movie.title}`} />
				<p className="text-md font-semibold">{movie.title}</p>
				<ImdbRating rating={movie.vote_average.toFixed(1)} />
				<p><FontAwesomeIcon icon={faClock} className="text-gray-500" /> {movie.runtime} minutes</p>
			</Link>
		</li>
	)
}
