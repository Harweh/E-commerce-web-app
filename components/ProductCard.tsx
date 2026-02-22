'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/store/Cart'
import { useWishlistStore } from '@/store/Wishlist'

interface ProductCardProps {
    product: Product
    priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [showAddedToCart, setShowAddedToCart] = useState(false)
    
    const addToCart = useCartStore(state => state.addItem)
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
    const inWishlist = isInWishlist(product.id)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        addToCart(product)
        setShowAddedToCart(true)
        setTimeout(() => setShowAddedToCart(false), 2000)
    }

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault()
        if (inWishlist) {
        removeFromWishlist(product.id)
        } else {
        addToWishlist(product)
        }
    }

    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <div 
        className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <Link href={`/product/${product.id}`} className="block">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
            <Image
                src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-all duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
                } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                priority={priority}
            />
            
            {/* Skeleton Loader */}
            {!imageLoaded && (
                <div className="absolute inset-0 skeleton" />
            )}

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.new && (
                <span className="px-3 py-1 bg-primary-600 text-black text-xs font-semibold rounded-full">
                    New
                </span>
                )}
                {product.sale && discount > 0 && (
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    {discount}% OFF
                </span>
                )}
            </div>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                onClick={handleToggleWishlist}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                    inWishlist 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white/50 text-neutral-700 hover:bg-primary-600 hover:text-gray-500 cursor-pointer'
                } ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
            </div>

            {/* Add to Cart Button - Appears on Hover */}
            <button
                onClick={handleAddToCart}
                className={`absolute bottom-0 left-0 right-0 bg-primary-600 text-neutral-900 py-3 font-semibold transition-all duration-300 hover:bg-primary-700 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
            >
                <ShoppingBag className="w-5 h-5 text-neutral-900 inline mr-2" />
                Add to Cart
            </button>

            {/* Added to Cart Notification */}
            {showAddedToCart && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 animate-fade-in">
                <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-neutral-900 font-semibold">Added to cart!</p>
                </div>
                </div>
            )}
            </div>

            {/* Product Info */}
            <div className="p-4">
            {/* Brand */}
            {product.brand && (
                <p className="text-xs text-neutral-600 mb-1 uppercase tracking-wide">
                {product.brand}
                </p>
            )}

            {/* Name */}
            <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 lg:gap-3 mb-3">
                <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                    key={i}
                    className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-neutral-300'
                    }`}
                    />
                ))}
                </div>
                <span className="text-sm text-neutral-600">
                ({product.reviewCount})
                </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-neutral-900">
                ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                <span className="text-sm text-neutral-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                </span>
                )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
                <div className="flex gap-1 mt-2">
                {product.colors.slice(0, 4).map((color, index) => (
                    <div
                    key={index}
                    className="w-6 h-6 rounded-xl lg:rounded-lg border-2 border-neutral-400"
                    style={{ 
                        backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                    color.toLowerCase() === 'black' ? '#000000' :
                                    color.toLowerCase() === 'brown' ? '#8B4513' :
                                    color.toLowerCase() === 'blue' ? '#3B82F6' :
                                    color.toLowerCase() === 'navy' ? '#000080' :
                                    color.toLowerCase()
                    }}
                    title={color}
                    />
                ))}
                {product.colors.length > 4 && (
                    <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-xs text-neutral-600">
                    +{product.colors.length - 4}
                    </div>
                )}
                </div>
            )}
            </div>
        </Link>
        </div>
    )
}