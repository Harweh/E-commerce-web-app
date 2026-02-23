/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { getPaginatedProducts } from '@/lib/products'
import { Product } from '@/types'


export const dynamic = 'force-dynamic'


export default function ShopPage() {
    const searchParams = useSearchParams()
    const [products, setProducts] = useState<Product[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || 'all',
        sortBy: 'newest' as 'newest' | 'price-asc' | 'price-desc' | 'popular',
        searchQuery: searchParams.get('q') || '',
    })

    const { ref, inView } = useInView({
        threshold: 0,
    })

    const loadProducts = (pageNum: number, reset: boolean = false) => {
        setLoading(true)
        
        const result = getPaginatedProducts(pageNum, 20, {
        category: filters.category !== 'all' ? filters.category : undefined,
        sortBy: filters.sortBy,
        searchQuery: filters.searchQuery,
        })

        if (reset) {
        setProducts(result.data)
        } else {
        setProducts(prev => [...prev, ...result.data])
        }
        
        setHasMore(result.hasMore)
        setLoading(false)
    }

    useEffect(() => {
        setPage(1)
        loadProducts(1, true)
    }, [filters])

    useEffect(() => {
        if (inView && hasMore && !loading && page > 1) {
        loadProducts(page)
        }
    }, [inView, hasMore, loading, page])

    const handleLoadMore = () => {
        setPage(prev => prev + 1)
    }

    useEffect(() => {
        if (page > 1) {
        loadProducts(page)
        }
    }, [page])

    const categories = ['all', 'Bags', 'Electronics', 'Home', 'Clothing', 'Sports', 'Accessories']

    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        }>
            <div className="min-h-screen bg-neutral-50">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
                {/* Page Header */}
                <div className="mb-8">
                <h1 className="font-display text-4xl text-neutral-800 pt-5 lg:pt-12 sm:text-5xl font-bold mb-2">
                    {filters.category !== 'all' ? filters.category : 'All Products'}
                </h1>
                <p className="text-neutral-600">
                    {products.length} products found
                </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar - Desktop */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <div className="bg-white rounded-lg p-6 sticky top-24">
                    <h3 className="font-semibold text-neutral-600 text-lg mb-4">Filters</h3>

                    {/* Category Filter */}
                    <div className="mb-6">
                        <h4 className="font-medium text-neutral-600 mb-3">Category</h4>
                        <div className="space-y-2 lg:space-y-2">
                        {categories.map(category => (
                            <label
                            key={category}
                            className="flex items-center cursor-pointer group"
                            >
                            <input
                                type="radio"
                                name="category"
                                checked={filters.category === category}
                                onChange={() => setFilters(prev => ({ ...prev, category }))}
                                className="w-4 h-4 text-primary-600  focus:ring-primary-600"
                            />
                            <span className="ml-2 text-neutral-700 group-hover:text-primary-600 transition-colors capitalize">
                                {category}
                            </span>
                            </label>
                        ))}
                        </div>
                    </div>

                    {/* Sort By */}
                    <div>
                        <h4 className="font-medium text-neutral-500 mb-3">Sort By</h4>
                        <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters(prev => ({ 
                            ...prev, 
                            sortBy: e.target.value as any 
                        }))}
                        className="w-full px-4 py-2 border border-neutral-500 text-neutral-600 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 outline-none"
                        >
                        <option value="newest">Newest First</option>
                        <option value="popular">Most Popular</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                    </div>
                </aside>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                    <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg border border-neutral-600"
                    >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                    </button>
                </div>

                {/* Mobile Filters Modal */}
                {showFilters && (
                    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-white text-neutral-600 p-6 overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-lg">Filters</h3>
                        <button
                            onClick={() => setShowFilters(false)}
                            className="p-2 hover:bg-neutral-100 rounded-lg"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                        <h4 className="font-medium mb-3">Category</h4>
                        <div className="space-y-2">
                            {categories.map(category => (
                            <label
                                key={category}
                                className="flex items-center cursor-pointer"
                            >
                                <input
                                type="radio"
                                name="category-mobile"
                                checked={filters.category === category}
                                onChange={() => {
                                    setFilters(prev => ({ ...prev, category }))
                                    setShowFilters(false)
                                }}
                                className="w-4 h-4 text-primary-600"
                                />
                                <span className="ml-2 text-neutral-700 capitalize">
                                {category}
                                </span>
                            </label>
                            ))}
                        </div>
                        </div>

                        {/* Sort By */}
                        <div>
                        <h4 className="font-medium mb-3">Sort By</h4>
                        <select
                            value={filters.sortBy}
                            onChange={(e) => {
                            setFilters(prev => ({ 
                                ...prev, 
                                sortBy: e.target.value as any 
                            }))
                            setShowFilters(false)
                            }}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                        >
                            <option value="newest">Newest First</option>
                            <option value="popular">Most Popular</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                        </div>
                    </div>
                    </div>
                )}

                {/* Products Grid */}
                <div className="flex-1">
                    {products.length === 0 && !loading ? (
                    <div className="text-center py-20">
                        <p className="text-neutral-600 text-lg">No products found</p>
                    </div>
                    ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <ProductCard 
                            key={`${product.id}-${index}`} 
                            product={product}
                            priority={index < 6}
                            />
                        ))}
                        </div>

                        {/* Infinite Scroll Trigger */}
                        {hasMore && (
                        <div ref={ref} className="mt-8 text-center">
                            {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {[...Array(3)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg overflow-hidden">
                                    <div className="aspect-square skeleton" />
                                    <div className="p-4 space-y-3">
                                    <div className="h-4 skeleton rounded w-3/4" />
                                    <div className="h-4 skeleton rounded w-1/2" />
                                    <div className="h-6 skeleton rounded w-1/3" />
                                    </div>
                                </div>
                                ))}
                            </div>
                            ) : (
                            <button
                                onClick={handleLoadMore}
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                Load More
                            </button>
                            )}
                        </div>
                        )}
                    </>
                    )}
                </div>
                </div>
            </main>

            </div>
        </Suspense>
    )
}