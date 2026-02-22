// Product Types
export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    images: string[]
    category: string
    subcategory?: string
    stock: number
    rating: number
    reviewCount: number
    tags: string[]
    colors?: string[]
    sizes?: string[]
    brand?: string
    featured?: boolean
    new?: boolean
    sale?: boolean
}

// User Types
export interface User {
    id: string
    email: string
    name: string
    avatar?: string
    createdAt: Date
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    login: (email: string, password: string) => Promise<void>
    register: (name: string, email: string, password: string) => Promise<void>
    logout: () => void
}

// Cart Types
export interface CartItem {
    product: Product
    quantity: number
    selectedColor?: string
    selectedSize?: string
}

export interface CartState {
    items: CartItem[]
    addItem: (product: Product, quantity?: number, color?: string, size?: string) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    getTotalPrice: () => number
    getTotalItems: () => number
}

// Wishlist Types
export interface WishlistState {
    items: Product[]
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    isInWishlist: (productId: string) => boolean
}

// Filter Types
export interface FilterState {
    category: string | null
    priceRange: [number, number]
    sortBy: 'newest' | 'price-asc' | 'price-desc' | 'popular'
    inStock: boolean
    searchQuery: string
}

// API Response Types
export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    pageSize: number
    hasMore: boolean
}

export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
    message?: string
}

// Form Types
export interface LoginFormData {
    email: string
    password: string
}

export interface RegisterFormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface ReviewFormData {
    rating: number
    comment: string
    name: string
    email: string
}