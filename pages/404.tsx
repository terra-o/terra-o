import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-screen h-screen dark:bg-terra-o-black bg-terra-o-white flex items-center flex-col gap-y-6 justify-center">
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-terra-o-blue-100 to-terra-o-green-200 font-terra-o">
        404
      </h1>
      <p className="text-lg text-terra-o-gray-300 font-sans px-4">
        Getting lost is part of getting there.
      </p>
      <Link href="/">
        <button className="mt-2 px-6 py-4 border-[2px] border-terra-o-black dark:text-terra-o-white dark:hover:text-terra-o-black hover:text-terra-o-white text-terra-o-black hover:bg-terra-o-black dark:border-terra-o-white dark:hover:bg-terra-o-white transition-colors duration-100">
          <a className="font-sans px-4">Go back to Terra O</a>
        </button>
      </Link>
    </div>
  )
}
