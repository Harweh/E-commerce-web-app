/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Home, ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                        <Compass className="text-green-400" size={40} />
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-white">404</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-white">Page Not Found</h2>
                <p className="text-gray-400">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-green-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
                    >
                        <Home size={18} />
                        Back Home
                    </Link>
                    <Link
                        href="/blog"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 text-white font-semibold rounded-xl hover:border-white/20 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Browse Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}