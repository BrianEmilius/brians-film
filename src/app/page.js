"use client"

import MovieListItem from "@/components/movie-list-item"
import Navbar from "@/components/navbar"
import NowShowing from "@/components/now-showing"
import Popular from "@/components/popular"
import Axios from "axios"
import { useState } from "react"

export default function MoviesPage() {
  const [searchResults, setSearchResults] = useState([])

  async function searchHandler(event) {
    const response = await Axios.get(`https://api.themoviedb.org/3/search/multi?query=${event.target.value}`,{
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN
      }
    })
  
    setSearchResults(response.data.results)
  }

  return (
    <div className="max-h-dvh overflow-hidden">
      <header className="flex justify-between items-center px-6 h-[10dvh]">
        <div className="relative">
          <input onChange={searchHandler} type="search" className="border border-gray-300" />
          <div className="absolute h-[80dvh] w-[90vw] px-6 py-2 bg-white z-50">
            results
            {searchResults.map(result => result.media_type === "movie" && <MovieListItem movie={result} />)}
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center">Mooviez</h1>
        <div>
          <input type="checkbox" className="sr-only" />
          <label className="relative block w-8 h-4 bg-blue-400 rounded-full after:absolute after:content-[''] after:w-4 after:h-4 after:bg-yellow-500 after:rounded-full"></label>
        </div>
      </header>
      <main className="h-[82dvh]">
        <NowShowing />
        <Popular />
      </main>
      <Navbar />
    </div>
  )
}
