import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-navy-blue">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link href="/" className="bg-navy-blue text-white px-4 py-2 rounded hover:bg-blue-900">
        Go back home
      </Link>
    </div>
  )
}