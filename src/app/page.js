import Navbar from "@/components/navbar"
import NowShowing from "@/components/now-showing"
import Popular from "@/components/popular"

export default function MoviesPage() {
  return (
    <div className="max-h-dvh overflow-hidden">
      <header className="flex justify-between items-center px-6 h-[10dvh]">
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
