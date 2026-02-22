/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/store/Cart'

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()

    const subtotal = getTotalPrice()
    const shipping = subtotal > 100 ? 0 : 10
    const tax = subtotal * 0.1
    const total = subtotal + shipping + tax

    if (items.length === 0) {
        return (
        <div className="min-h-screen bg-neutral-200 pt-40 ">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20 lg:mt-20">
            <div className="text-center">
                <ShoppingBag className="w-24 h-24 mx-auto text-neutral-400 mb-6" />
                <h1 className="font-display text-3xl text-neutral-600 font-bold mb-4">Your cart is empty</h1>
                <p className="text-neutral-700 mb-8">
                Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                href="/shop"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-neutral-600 font-semibold rounded-lg transition-colors"
                >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
                </Link>
            </div>
            </main>
        </div>
        )
    }

    return (
        <div className="min-h-screen bg-neutral-50">

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
            <div className="mb-8 pt-6 lg:pt-15">
                <Link
                    href="/shop"
                    className="inline-flex items-center text-neutral-700 text-primary-600 hover:text-primary-700 font-medium mb-4"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Continue Shopping
                </Link>
                <h1 className="font-display text-3xl lg:text-4xl text-neutral-800 mt-5 font-bold">Shopping Cart</h1>
                <p className="text-neutral-600 mt-1 lg:mt-5">{items.length} items in your cart</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                <div key={item.product.id} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-200">
                        <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                            <div>
                                <Link
                                href={`/product/${item.product.id}`}
                                className="font-semibold text-lg text-neutral-900 hover:text-primary-600 transition-colors"
                                >
                                {item.product.name}
                                </Link>
                                {item.product.brand && (
                                <p className="text-sm text-neutral-600 mt-1">{item.product.brand}</p>
                                )}
                                {item.selectedColor && (
                                <p className="text-sm text-neutral-600 mt-2">
                                    Color: <span className="font-medium">{item.selectedColor}</span>
                                </p>
                                )}
                                {item.selectedSize && (
                                <p className="text-sm text-neutral-800">
                                    Size: <span className="font-medium">{item.selectedSize}</span>
                                </p>
                                )}
                            </div>
                        <p className="font-bold text-neutral-900 text-lg">
                            ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        </div>

                        {/* Quantity & Remove */}
                        <div className="flex items-center text-neutral-800 gap-4 mt-4">
                            <div className="flex items-center border border-neutral-400 rounded-xl">
                                <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                                aria-label="Decrease quantity"
                                >
                                <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 text-neutral-800 font-medium">{item.quantity}</span>
                                <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                                aria-label="Increase quantity"
                                >
                                <Plus className="w-4 h-4" />
                                </button>
                            </div>  

                        <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-neutral-600 cursor-pointer hover:text-red-700 transition-colors flex items-center gap-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}

                {/* Clear Cart */}
                <button
                onClick={clearCart}
                className="text-neutral-600 cursor-pointer hover:text-gray-500 transition-colors font-medium"
                >
                Clear Cart
                </button>
            </div>

            {/* Order Summary */}
            <div className=" lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="font-semibold text-xl text-neutral-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                        <span className='text-neutral-800'>Total</span>
                        <span className='text-neutral-800'>${total.toFixed(2)}</span>
                    </div>
                    </div>
                </div>

                {subtotal < 100 && (
                    <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                    <p className="text-sm text-primary-800">
                        Add <span className="font-semibold">${(100 - subtotal).toFixed(2)}</span> more
                        to get free shipping!
                    </p>
                    </div>
                )}

                <Link
                    href="/checkout"
                    className="block w-full text-center px-6 py-4 bg-primary-600 hover:bg-primary-700 text-black font-semibold rounded-lg transition-colors mb-3"
                >
                    Proceed to Checkout
                </Link>

                <Link
                    href="/shop"
                    className="block w-full text-center px-6 py-3 border border-neutral-400 hover:bg-neutral-50 text-neutral-700 font-medium rounded-lg transition-colors"
                >
                    Continue Shopping
                </Link>

                {/* Security Badges */}
                <div className="mt-6 pt-6 border-t border-neutral200">
                    <p className="text-xs text-neutral-800 text-center mb-3">We accept</p>
                    <div className="flex justify-center gap-2">
                    <div className="w-12 h-8 bg-blue-700 text rounded flex items-center justify-center text-xs font-semibold">
                        VISA
                    </div>
                    <div className="w-12 h-8 bg-amber-800 text-black rounded flex items-center justify-center text-xs font-semibold">
                        MC
                    </div>
                    <div className="w-14 h-8 bg-red-500 text-black rounded flex items-center justify-center text-xs font-semibold">
                        AMEX
                    </div>
                    <div className="w-12 h-8 bg-neutral-800 rounded flex items-center justify-center text-xs font-semibold">
                        PP
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>

        </div>
    )
}