// 'use client'
// import {useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useCartStore } from '@/store/Cart';
// import { useWishlistStore } from '@/store/Wishlist';
// import { Menu, X, ShoppingCart, User, Equal, Search, Heart, MenuIcon } from 'lucide-react';
// import { AuthState } from '@/types';
// import { WishlistState } from '../types/index';
// import { useAuthStore } from '@/store/auth';

// export default function Navbar() {

//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [isSearchOpen, setIsSearchOpen] = useState(false)
    
//     const totalItems = useCartStore(state => state.getTotalItems())
//     const wishlistItems = useWishlistStore(state => state.items)
//     const { isAuthenticated, user } = useAuthStore()

//     useEffect(() => {
//         const handleScroll = () => {
//         setIsScrolled(window.scrollY > 20)
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])


//     const navigation = [
//         { name: 'Shop', href: '/shop' },
//         { name: 'Catalog', href: '/catalog' },
//         { name: 'New Arrivals', href: '/new' },
//         { name: 'Sale', href: '/sale' },
//         { name: 'Product', href: '/products' },
//         // { name: 'Cart', href: '/cart' },
//     ]

//     return (
//         <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white shadow-md ${
//             isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm'
//             : 'bg-white'
//             }`}>

//             <div className="max-w-7xl mx-auto sm:px-4 md:px-8 lg:px-8">

//                 <div className="flex items-center justify-center border-b w-full border-gray-100 ">
//                     <h2 className='text-black sm:text-sm py-3 md:py-5 lg:py-5 md:text-xl lg:text-2xl font-bold'> 
//                         Welcome to your number one online commerce
//                     </h2>
//                 </div>

//                 <div className="flex items-center gap- lg:gap-2 space-x-1 lg:space-x-4">
                    
//                     {/* {desktop logo} */}
//                     <Link
//                         href="/" 
//                         className="sm:hidden text-3xl font-bold text-gray-900 md:block">
//                             E-Shop
//                     </Link>

                
//                        {/* {dropdown mobile menu } */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black">
//                         {isMobileMenuOpen ? <X size={18} /> : < MenuIcon size={14} />}
//                         {isMobileMenuOpen && (
//                             <div className="md:hidden absolute bg-white h-[96vh] top-full left-0 right-100 shadow-lg">
                                        
//                                 <nav className="flex flex-col py-6 px-4">
//                                     <Link 
//                                         href="/" 
//                                         className="text-black pl-10 py-4 px-6 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Home
//                                     </Link>
//                                     <Link 
//                                         href="/shop" 
//                                         className="text-black pl-10 py-4 px-6 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Shop
//                                     </Link>
//                                     <Link 
//                                         href="/catalog" 
//                                         className="text-black pl-10 py-4 px-6 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Catalog
//                                     </Link>
//                                     <Link 
//                                         href="/new" 
//                                         className="text-black pl-10 py-4 px-6 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         New Arrivals
//                                     </Link>
//                                     <Link 
//                                         href="/sale" 
//                                         className="text-black pl-10 py-4 px-5 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Sale
//                                     </Link>
//                                     <Link 
//                                         href="/products" 
//                                         className="text-black pl-10 py-4 px-5 hover:text-gray-500 transition border-b"
//                                         onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Product
//                                     </Link>
//                                     <Link 
//                                             href="/" 
//                                             className="text-black pl-10 py-4 px-5 hover:text-gray-500 transition border-b"
//                                             onClick={() => setIsMobileMenuOpen(false)}
//                                     >
//                                         Contact
//                                     </Link>
//                                 </nav>
                                        
//                             </div>
//                         )}
//                     </button>

//                         {/* {mobile search bar} */}
//                     <div className="md:hidden flex items-center px-1">
//                                 <button 
//                                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                                 className='md:hidden'>
//                                     <Link href="/" className=" text-gray-700 hover:text-gray-900">
//                                         <Search size={13} />
//                                     </Link>
//                             </button>
//                                 {isSearchOpen && (
//                                     <div className="py- animate-slide-up">
//                                         <input
//                                         type="search"
//                                         placeholder="Search products..."
//                                         className="w-full px-1  text-black py-1 rounded-lg border-2 border-neutral-300 focus:border-primary-600 focus:outline-none focus:ring-0.5 focus:ring-primary-600/20 transition-all"
//                                         autoFocus
//                                         />
//                                     </div>
//                                 )}
//                     </div>

//                     {/* {mobile logo} */}
//                     <div className="md:hidden flex items-center">
//                         <Link 
//                             href="/" 
//                             className="md:hidden text-3xl absolute left-1/2 -translate-x-1/2 font-bold text-gray-900 ">
//                                 E-Shop
//                         </Link>
//                     </div>

//                     {/* {desktop nav} */}
//                     <nav className="hidden md:flex items-center justify-center lg:space-x-5.5">
//                         {navigation.map((item) => (
//                         <Link
//                             key={item.name}
//                             href={item.href}
//                             className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
//                         >
//                             {item.name}
//                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
//                         </Link>
//                         ))}
//                     </nav>

//                     {/* {desktop & mobile icon} */}
//                         <div className="flex items-center sm:left-1/2 sm:translate-x-23/4 space-x-3 lg:space-x-8 py-4 lg:py-4 bg-neutral-00">
                            
//                                 <div className="hidden md:flex flex-1 max-w-xl mx-8">
//                                     <div className="relative w-full">
//                                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={13} />
//                                         <input
//                                             type="search"
//                                             placeholder="Search for products..."
//                                             className="w-lg pl-12 pr-4 py-2.5 text-black bg-white rounded-xl border-1 focus:outline-none focus:ring-2 focus:ring-black/10"
//                                         />
//                                     </div>
//                                 </div>

//                                 <Link
//                                 href="/wishlist"
//                                 className="relative text-neutral-700 hover:text-primary-600 transition-colors hidden sm:block"
//                                 aria-label="Wishlist"
//                                 >
//                                 <Heart className="w-5 h-5" />
//                                 {wishlistItems.length > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                                     {wishlistItems.length}
//                                     </span>
//                                 )}
//                                 </Link>

//                                 <Link
//                                 href="/cart"
//                                 className="relative block text-neutral-700 hover:text-primary-600 transition-colors"
//                                 aria-label="Shopping cart"
//                                 >
//                                 <ShoppingCart className="w-5 h-5" />
//                                 {totalItems > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
//                                     {totalItems}
//                                     </span>
//                                 )}
//                                 </Link>

//                                 <Link
//                                     href={isAuthenticated ? '/account' : '/login'}
//                                     className="text-gray-500 hover:text-primary-600 transition-colors hidden sm:block"
//                                     aria-label="Account"
//                                     >
//                                     <User size={14} />
//                                 </Link>

//                         </div>
                        
//                 </div>

//                 </div>
        
//         </header>

        
//     );
// }



// 'use client'
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useCartStore } from '@/store/Cart';
// import { useWishlistStore } from '@/store/Wishlist';
// import { Menu, X, ShoppingCart, User, Search, Heart, MenuIcon } from 'lucide-react';
// import { useAuthStore } from '@/store/auth';

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//     const [isSearchOpen, setIsSearchOpen] = useState(false)
    
//     const totalItems = useCartStore(state => state.getTotalItems())
//     const wishlistItems = useWishlistStore(state => state.items)
//     const { isAuthenticated, user } = useAuthStore()

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20)
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     const navigation = [
//         { name: 'Shop', href: '/shop' },
//         { name: 'Catalog', href: '/catalog' },
//         { name: 'New Arrivals', href: '/new' },
//         { name: 'Sale', href: '/sale' },
//         { name: 'Product', href: '/products' },
//     ]

//     return (
//         <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
//             isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white shadow-md'
//         }`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
//                 {/* Top Banner */}
//                 <div className="flex items-center justify-center border-b border-gray-100">
//                     <h2 className='text-black text-sm sm:text-base md:text-lg py-3 md:py-4 font-semibold text-center'> 
//                         Welcome to your number one online commerce
//                     </h2>
//                 </div>

//                 {/* Main Navigation */}
//                 <div className="flex items-center justify-between py-">
                    
//                     {/* Mobile Menu Button */}
//                     <button 
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
//                         className="md:hidden text-black p-2"
//                     >
//                         {isMobileMenuOpen ? <X size={14} /> : <MenuIcon size={14} />}
//                     </button>
                    
//                     {/* Mobile Search */}
//                     <button 
//                             onClick={() => setIsSearchOpen(!isSearchOpen)}
//                             className='md:hidden text-gray-700 hover:text-black'
//                         >
//                             <Search size={10} />
//                     </button>

//                     {/* Logo */}
//                     <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900">
//                         E-Shop
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
//                         {navigation.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className="text-gray-700 hover:text-black font-medium transition-colors relative group"
//                             >
//                                 {item.name}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Desktop Search Bar */}
//                     <div className="hidden md:flex flex-1 max-w-md mx-8">
//                         <div className="relative w-full">
//                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                             <input
//                                 type="search"
//                                 placeholder="Search for products..."
//                                 className="w-full pl-11 pr-4 py-2.5 text-black bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-black/10"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Icons */}
//                     <div className="flex items-center gap-4">
                        

//                         {/* Wishlist */}
//                         <Link
//                             href="/wishlist"
//                             className="relative text-gray-700 hover:text-black transition-colors hidden sm:block"
//                             aria-label="Wishlist"
//                         >
//                             <Heart className="w-5 h-5" />
//                             {wishlistItems.length > 0 && (
//                                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                                     {wishlistItems.length}
//                                 </span>
//                             )}
//                         </Link>

//                         {/* Cart */}
//                         <Link
//                             href="/cart"
//                             className="relative text-gray-700 hover:text-black transition-colors"
//                             aria-label="Shopping cart"
//                         >
//                             <ShoppingCart className="w-5 h-5" />
//                             {totalItems > 0 && (
//                                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
//                                     {totalItems}
//                                 </span>
//                             )}
//                         </Link>

//                         {/* User Account */}
//                         <Link
//                             href={isAuthenticated ? '/account' : '/login'}
//                             className="text-gray-700 hover:text-black transition-colors hidden sm:block"
//                             aria-label="Account"
//                         >
//                             <User className="w-5 h-5" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Mobile Search Bar */}
//                 {isSearchOpen && (
//                     <div className="md:hidden pb-4 animate-slide-up">
//                         <div className="relative">
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                             <input
//                                 type="search"
//                                 placeholder="Search products..."
//                                 className="w-full pl-10 pr-4 py-2.5 text-black bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-black/10"
//                                 autoFocus
//                             />
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden absolute h-[96vh] top-full left-0 right-100 bg-white shadow-lg border-t border-gray-100">
//                     <nav className="flex flex-col">
//                         <Link 
//                             href="/" 
//                             className="text-black py-4 px-6 hover:bg-gray-50 transition border-b"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Home
//                         </Link>
//                         {navigation.map((item) => (
//                             <Link 
//                                 key={item.name}
//                                 href={item.href} 
//                                 className="text-black py-4 px-6 hover:bg-gray-50 transition border-b"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                         <Link 
//                             href="/contact" 
//                             className="text-black py-4 px-6 hover:bg-gray-50 transition"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </Link>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }






'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/Cart';
import { useWishlistStore } from '@/store/Wishlist';
import { Menu, X, ShoppingCart, User, Search, Heart, MenuIcon } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    
    const totalItems = useCartStore(state => state.getTotalItems())
    const wishlistItems = useWishlistStore(state => state.items)
    const { isAuthenticated, user } = useAuthStore()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Shop', href: '/shop' },
        { name: 'Catalog', href: '/catalog' },
        { name: 'New Arrivals', href: '/new' },
        { name: 'Sale', href: '/sale' },
        { name: 'Product', href: '/products' },
    ]

    return (
        <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Banner */}
                <div className="flex items-center justify-center border-b border-gray-100">
                    <h2 className='text-black text-sm sm:text-base md:text-lg lg:text-xl py-3 md:py-4 font-bold text-center'> 
                        Welcome to your number one online commerce
                    </h2>
                </div>

                {/* Main Navigation */}
                <div className="flex items-center justify-between py-4 lg:py-4 px-1 lg:px-0">
                    
                    {/* Left Side - Mobile Menu & Search */}
                    <div className="flex items-center gap-3 md:hidden">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                            className="text-black p- md:p-4"
                        >
                            {isMobileMenuOpen ? <X size={14} /> : <MenuIcon size={14} />}
                        </button>

                        {/* Mobile Search Button */}
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className='text-gray-700 pt-1 hover:text-black'
                        >
                            <Search size={12} />
                        </button>
                    </div>

                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-3xl md:text-3xl font-bold text-black absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                        E-Shop
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-black font-medium transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-6">
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" size={14} />
                            <input
                                type="search"
                                placeholder="Search for products..."
                                className="w-full pl-12 pr-4 py-2.5 pt-3 text-black bg-gray-200 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black/10"
                            />
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        {/* Wishlist */}
                        <Link
                            href="/wishlist"
                            className="relative text-gray-700 hover:text-black transition-colors hidden sm:block"
                            aria-label="Wishlist"
                        >
                            <Heart className="w-5 h-5" />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative text-gray-700 hover:text-black transition-colors"
                            aria-label="Shopping cart"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {/* User Account */}
                        <Link
                            href={isAuthenticated ? '/account' : '/login'}
                            className="text-gray-700 hover:text-black transition-colors hidden sm:block"
                            aria-label="Account"
                        >
                            <User className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className="md:hidden pb-2 animate-slide-up">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" size={12} />
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-2.5 text-black bg-gray-200 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black/10"
                                autoFocus
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-80 h-[96vh] bg-white shadow-lg border-t border-gray-100">
                    <nav className="flex flex-col">
                        <Link 
                            href="/" 
                            className="text-black py-4 px-6 hover:bg-gray-50 transition border-b border-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        {navigation.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className="text-black py-4 px-6 hover:bg-gray-50 transition border-b border-gray-100"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link 
                            href="/contact" 
                            className="text-black py-4 px-6 hover:bg-gray-50 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}