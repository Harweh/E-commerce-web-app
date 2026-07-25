'use client'

import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'
import { useCartStore } from '@/store/Cart'

export default function CheckoutPage() {
    const { items, getTotalPrice } = useCartStore()
    const subtotal = getTotalPrice()

    return (
        <div className="min-h-screen bg-neutral-50">
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
                <Link
                    href="/cart"
                    className="inline-flex items-center text-neutral-700 hover:text-primary-600 font-medium mb-8"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Cart
                </Link>

                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Construction className="w-8 h-8 text-primary-600" />
                    </div>
                    <h1 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                        Checkout is coming soon
                    </h1>
                    <p className="text-neutral-600 mb-6">
                        Payment integration isn&apos;t wired up yet. Here&apos;s a summary of what&apos;s
                        in your cart in the meantime.
                    </p>

                    {items.length === 0 ? (
                        <p className="text-neutral-500">Your cart is empty.</p>
                    ) : (
                        <div className="text-left border-t border-neutral-200 pt-6 space-y-3">
                            {items.map(item => (
                                <div
                                    key={`${item.product.id}-${item.selectedColor ?? ''}-${item.selectedSize ?? ''}`}
                                    className="flex justify-between text-sm text-neutral-700"
                                >
                                    <span>{item.product.name} × {item.quantity}</span>
                                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="flex justify-between font-bold text-neutral-900 border-t border-neutral-200 pt-3">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}