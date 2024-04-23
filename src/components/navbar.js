import { faFilm, faTicket, faBookmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="fixed px-6 h-[8dvh] bg-white shadow-upper bottom-0 w-full">
			<ul className="flex justify-between leading-[8dvh]">
				<li>
					<Link href="/">
						<FontAwesomeIcon icon={faFilm} className="text-2xl" />
						<span className="sr-only">Home</span>
					</Link>
				</li>
				<li>
					<Link href="/signin">
						<FontAwesomeIcon icon={faTicket} className="text-2xl" />
						<span className="sr-only">Sign in</span>
					</Link>
				</li>
				<li>
					<Link href="/favourites">
						<FontAwesomeIcon icon={faBookmark} className="text-2xl" />
						<span className="sr-only">Bookmarked</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
