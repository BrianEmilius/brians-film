export default function Genres({ genres }) {
	return (
		<div className="flex flex-nowrap gap-3 overflow-x-scroll snap-x w-full my-2">
			{genres.map(function (genre) {
				return <span key={genre.id} className="text-xs block snap-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{genre.name}</span>
			})}
		</div>
	)
}
