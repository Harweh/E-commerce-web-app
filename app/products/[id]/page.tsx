// 'use client'

// import { useState } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Heart, ShoppingBag, Star, Truck, Shield, ArrowLeft, Check } from 'lucide-react'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import ProductCard from '@/components/ProductCard'
// import { MOCK_PRODUCTS } from '@/lib/products'
// import { useCartStore } from '@/store/Cart'
// import { useWishlistStore } from '@/store/Wishlist'

// export default function ProductDetailPage() {
//     const params = useParams()
//     const router = useRouter()
//     const productId = params.id as string

//     const product = MOCK_PRODUCTS.find(p => p.id === productId)
//     const relatedProducts = MOCK_PRODUCTS.filter(p => 
//         p.category === product?.category && p.id !== productId
//     ).slice(0, 4)

//     const [selectedImage, setSelectedImage] = useState(0)
//     const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '')
//     const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '')
//     const [quantity, setQuantity] = useState(1)
//     const [showAddedToCart, setShowAddedToCart] = useState(false)

//     const addToCart = useCartStore(state => state.addItem)
//     const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
//     const inWishlist = product ? isInWishlist(product.id) : false

//     if (!product) {
//         return (
//         <div className="min-h-screen bg-neutral-50">
//             <Header />
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20 text-center">
//             <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
//             <Link
//                 href="/shop"
//                 className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
//             >
//                 <ArrowLeft className="w-5 h-5 mr-2" />
//                 Back to Shop
//             </Link>
//             </main>
//             <Footer />
//         </div>
//         )
//     }

//     const handleAddToCart = () => {
//         addToCart(product, quantity, selectedColor, selectedSize)
//         setShowAddedToCart(true)
//         setTimeout(() => setShowAddedToCart(false), 3000)
//     }

//     const handleToggleWishlist = () => {
//         if (inWishlist) {
//         removeFromWishlist(product.id)
//         } else {
//         addToWishlist(product)
//         }
//     }

//     const discount = product.originalPrice 
//         ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//         : 0

//     return (
//         <div className="min-h-screen bg-neutral-50">
//         <Header />

//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
//             {/* Breadcrumb */}
//             <div className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
//             <Link href="/" className="hover:text-primary-600">Home</Link>
//             <span>/</span>
//             <Link href="/shop" className="hover:text-primary-600">Shop</Link>
//             <span>/</span>
//             <Link href={`/shop?category=${product.category}`} className="hover:text-primary-600">
//                 {product.category}
//             </Link>
//             <span>/</span>
//             <span className="text-neutral-900">{product.name}</span>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
//             {/* Image Gallery */}
//             <div>
//                 {/* Main Image */}
//                 <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-4">
//                 <Image
//                     src={product.images[selectedImage]}
//                     alt={product.name}
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 {product.sale && discount > 0 && (
//                     <div className="absolute top-4 left-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-full">
//                     {discount}% OFF
//                     </div>
//                 )}
//                 {product.new && (
//                     <div className="absolute top-4 right-4 px-4 py-2 bg-primary-600 text-white font-semibold rounded-full">
//                     New
//                     </div>
//                 )}
//                 </div>

//                 {/* Thumbnail Images */}
//                 {product.images.length > 1 && (
//                 <div className="grid grid-cols-4 gap-4">
//                     {product.images.map((image, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setSelectedImage(index)}
//                         className={`relative aspect-square rounded-lg overflow-hidden bg-neutral-100 border-2 transition-all ${
//                         selectedImage === index 
//                             ? 'border-primary-600 ring-2 ring-primary-600/20' 
//                             : 'border-transparent hover:border-neutral-300'
//                         }`}
//                     >
//                         <Image
//                         src={image}
//                         alt={`${product.name} ${index + 1}`}
//                         fill
//                         className="object-cover"
//                         />
//                     </button>
//                     ))}
//                 </div>
//                 )}
//             </div>

//             {/* Product Info */}
//             <div>
//                 {/* Brand */}
//                 {product.brand && (
//                 <p className="text-sm text-neutral-500 uppercase tracking-wide mb-2">
//                     {product.brand}
//                 </p>
//                 )}

//                 {/* Title */}
//                 <h1 className="font-display text-4xl font-bold mb-4">{product.name}</h1>

//                 {/* Rating */}
//                 <div className="flex items-center gap-4 mb-6">
//                 <div className="flex items-center">
//                     {[...Array(5)].map((_, i) => (
//                     <Star
//                         key={i}
//                         className={`w-5 h-5 ${
//                         i < Math.floor(product.rating)
//                             ? 'text-yellow-400 fill-current'
//                             : 'text-neutral-300'
//                         }`}
//                     />
//                     ))}
//                 </div>
//                 <span className="text-neutral-600">
//                     {product.rating} ({product.reviewCount} reviews)
//                 </span>
//                 </div>

//                 {/* Price */}
//                 <div className="flex items-center gap-4 mb-6">
//                 <span className="text-4xl font-bold text-neutral-900">
//                     ${product.price.toFixed(2)}
//                 </span>
//                 {product.originalPrice && (
//                     <span className="text-xl text-neutral-500 line-through">
//                     ${product.originalPrice.toFixed(2)}
//                     </span>
//                 )}
//                 </div>

//                 {/* Description */}
//                 <p className="text-neutral-600 mb-8 leading-relaxed">
//                 {product.description}
//                 </p>

//                 {/* Color Selection */}
//                 {product.colors && product.colors.length > 0 && (
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-3">
//                     Color: <span className="font-normal text-neutral-600">{selectedColor}</span>
//                     </label>
//                     <div className="flex gap-3">
//                     {product.colors.map((color) => (
//                         <button
//                         key={color}
//                         onClick={() => setSelectedColor(color)}
//                         className={`w-12 h-12 rounded-full border-2 transition-all ${
//                             selectedColor === color
//                             ? 'border-primary-600 ring-2 ring-primary-600/20 scale-110'
//                             : 'border-neutral-300 hover:border-neutral-400'
//                         }`}
//                         style={{
//                             backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
//                                         color.toLowerCase() === 'black' ? '#000000' :
//                                         color.toLowerCase() === 'brown' ? '#8B4513' :
//                                         color.toLowerCase() === 'blue' ? '#3B82F6' :
//                                         color.toLowerCase() === 'navy' ? '#000080' :
//                                         color.toLowerCase()
//                         }}
//                         title={color}
//                         />
//                     ))}
//                     </div>
//                 </div>
//                 )}

//                 {/* Size Selection */}
//                 {product.sizes && product.sizes.length > 0 && (
//                 <div className="mb-6">
//                     <label className="block font-semibold mb-3">
//                     Size: <span className="font-normal text-neutral-600">{selectedSize}</span>
//                     </label>
//                     <div className="flex gap-3">
//                     {product.sizes.map((size) => (
//                         <button
//                         key={size}
//                         onClick={() => setSelectedSize(size)}
//                         className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
//                             selectedSize === size
//                             ? 'border-primary-600 bg-primary-50 text-primary-700'
//                             : 'border-neutral-300 hover:border-neutral-400'
//                         }`}
//                         >
//                         {size}
//                         </button>
//                     ))}
//                     </div>
//                 </div>
//                 )}

//                 {/* Quantity */}
//                 <div className="mb-6">
//                 <label className="block font-semibold mb-3">Quantity</label>
//                 <div className="flex items-center border-2 border-neutral-300 rounded-lg w-fit">
//                     <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-4 py-3 hover:bg-neutral-100 transition-colors"
//                     >
//                     -
//                     </button>
//                     <span className="px-6 py-3 font-semibold">{quantity}</span>
//                     <button
//                     onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
//                     className="px-4 py-3 hover:bg-neutral-100 transition-colors"
//                     >
//                     +
//                     </button>
//                 </div>
//                 <p className="text-sm text-neutral-600 mt-2">
//                     {product.stock > 10 
//                     ? 'In Stock' 
//                     : `Only ${product.stock} left in stock`}
//                 </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-4 mb-8">
//                 <button
//                     onClick={handleAddToCart}
//                     disabled={product.stock === 0}
//                     className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-lg transition-colors"
//                 >
//                     <ShoppingBag className="w-5 h-5" />
//                     {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//                 </button>
//                 <button
//                     onClick={handleToggleWishlist}
//                     className={`px-4 py-4 border-2 rounded-lg transition-all ${
//                     inWishlist
//                         ? 'border-primary-600 bg-primary-50 text-primary-600'
//                         : 'border-neutral-300 hover:border-neutral-400'
//                     }`}
//                 >
//                     <Heart className={`w-6 h-6 ${inWishlist ? 'fill-current' : ''}`} />
//                 </button>
//                 </div>

//                 {/* Added to Cart Notification */}
//                 {showAddedToCart && (
//                 <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
//                     <Check className="w-5 h-5 text-green-600" />
//                     <p className="text-green-800 font-medium">Added to cart successfully!</p>
//                 </div>
//                 )}

//                 {/* Features */}
//                 <div className="border-t border-neutral-200 pt-6 space-y-4">
//                 <div className="flex items-center gap-3 text-neutral-700">
//                     <Truck className="w-6 h-6 text-primary-600" />
//                     <div>
//                     <p className="font-semibold">Free Shipping</p>
//                     <p className="text-sm text-neutral-600">On orders over $100</p>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-3 text-neutral-700">
//                     <Shield className="w-6 h-6 text-primary-600" />
//                     <div>
//                     <p className="font-semibold">Secure Payment</p>
//                     <p className="text-sm text-neutral-600">100% secure transactions</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>

//             {/* Related Products */}
//             {relatedProducts.length > 0 && (
//             <section className="border-t border-neutral-200 pt-12">
//                 <h2 className="font-display text-3xl font-bold mb-8">You May Also Like</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {relatedProducts.map((relatedProduct) => (
//                     <ProductCard key={relatedProduct.id} product={relatedProduct} />
//                 ))}
//                 </div>
//             </section>
//             )}
//         </main>

//         <Footer />
//         </div>
//     )
// }