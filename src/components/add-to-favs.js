"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark as unbookmarked } from "@fortawesome/free-regular-svg-icons"
import { faBookmark as bookmarked } from "@fortawesome/free-solid-svg-icons"
import getIds from "@/actions/get-ids"
import { useEffect, useState } from "react"
import Axios from "axios"

export default function AddToFavs({ id }) {
	const [isFav, setIsFav] = useState(false)

	async function init() {
		const ids = await getIds()
		const response = await Axios.get(`https://api.themoviedb.org/3/account/${ids.account_id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, {
			headers: {
				Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN
			}
		})

		response.data.results.forEach(result => result.id == id && setIsFav(true))

		console.log(response.data.results)
	}

	useEffect(function () {
		init()
	}, [])


	async function bookmarkHandler(event) {
    const ids = await getIds()
    const response = await Axios.post(
      `https://api.themoviedb.org/3/account/${ids.account_id}/favorite`,
      { media_type: "movie", media_id: id, favorite: !isFav },
      {
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_ACCESS_TOKEN
        }
      }
    )
		if (response.data.success) setIsFav(!isFav)
  }

	return (
		<button onClick={bookmarkHandler}><FontAwesomeIcon size="lg" icon={isFav ? bookmarked : unbookmarked} className="" /><span className="sr-only">Bookmark</span></button>
	)
}
