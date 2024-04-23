"use client"

import getIds from "@/actions/get-ids"
import MovieListItem from "@/components/movie-list-item"
import Axios from "axios"
import { useEffect, useState } from "react"

export default function FavouritePage() {
  const [movies, setMovies] = useState([])

  async function init() {
    const ids = await getIds()
    const response = await Axios.get(`https://api.themoviedb.org/3/account/${ids.account_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.desc`, {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN
      }
    })

    setMovies(response.data.results)
  }

  useEffect(function() {
    init()
  }, [])
  
  return (
    <>
      <h1>Favourites</h1>
      {movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </>
  )
}
