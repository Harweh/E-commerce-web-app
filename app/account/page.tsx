'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, ShoppingBag, Mail, Star, Ticket, Heart, Store, Eye, Search, CreditCard, MapPin, 
    Settings, XCircle, LogOut, MessageSquare, Phone, ChevronRight} from 'lucide-react'
import { useAuthStore } from '@/store/auth'

export default function AccountPage() {
    const router = useRouter()
    const { user, isAuthenticated, logout } = useAuthStore()

    const handleLogout = () => {
        logout()
        router.push('/login')
    }

    // Redirect if not logged in
    if (!isAuthenticated || !user) {
        router.push('/login')
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 mb-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Welcome {user.name}!</h1>
            <p className="text-orange-100">{user.email}</p>
            </div>

            {/* Store Credit Balance */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <div>
                <p className="text-sm text-gray-600">E-Shop store credit balance</p>
                <p className="text-xl font-bold text-gray-900">₦ 0</p>
            </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold transition-colors">
                <MessageSquare className="w-5 h-5" />
                Live Chat
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-semibold transition-colors">
                <Phone className="w-5 h-5" />
                WhatsApp
            </button>
            </div>

            {/* Need Assistance Section */}
            <div className="mb-6">
            <h2 className="text-gray-600 font-medium mb-3 px-2">Need Assistance?</h2>
            <div className="bg-white rounded-lg shadow-sm">
                <Link 
                href="/help" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Help & Support</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
            </div>
            </div>

            {/* My Account Section */}
            <div className="mb-6">
            <h2 className="text-gray-600 font-medium mb-3 px-2">My E-Shop Account</h2>
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                
                <Link 
                href="/orders" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Orders</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/inbox" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Inbox</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/reviews" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Ratings & Reviews</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/vouchers" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Ticket className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Vouchers</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/wishlist" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Wishlist</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/followed-sellers" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Store className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Followed Sellers</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/recently-viewed" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Recently Viewed</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/recently-searched" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="font-medium text-gray-800">Recently Searched</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

            </div>
            </div>

            {/* My Settings Section */}
            <div className="mb-6">
            <h2 className="text-gray-600 font-medium mb-3 px-2">My Settings</h2>
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                
                <Link 
                href="/payment-settings" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <span className="font-medium text-gray-800">Payment Settings</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/address-book" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <span className="font-medium text-gray-800">Address Book</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/account-management" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <span className="font-medium text-gray-800">Account Management</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link 
                href="/close-account" 
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                <span className="font-medium text-gray-800">Close Account</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>

            </div>
            </div>

            {/* Logout Button */}
            <button
            onClick={handleLogout}
            className="w-full bg-white rounded-lg shadow-sm p-4 text-orange-600 font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
            >
            <LogOut className="w-5 h-5" />
            Logout
            </button>

        </div>
        </div>
    )
}