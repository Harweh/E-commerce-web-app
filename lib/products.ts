import { Product } from '@/types'

export const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Minimalist Leather Tote',
        description: 'Handcrafted Italian leather tote bag with brass hardware. Perfect for everyday use.',
        price: 189.99,
        originalPrice: 249.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801057/hans-pocket-767350_1920_fgjbjx.jpg',
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801057/hans-pocket-767350_1920_fgjbjx.jpg',
        ],
        category: 'Bags',
        subcategory: 'Totes',
        stock: 15,
        rating: 4.8,
        reviewCount: 124,
        tags: ['leather', 'handcrafted', 'minimalist'],
        colors: ['Brown', 'Black', 'Tan'],
        brand: 'Artisan Co.',
        featured: true,
        sale: true,
    },
    {
        id: '2',
        name: 'Ceramic Coffee Mug Set',
        description: 'Set of 4 handmade ceramic mugs with unique glazing. Microwave and dishwasher safe.',
        price: 59.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801479/nikiko-mugs-459324_1920_fv0bvz.jpg',
        '',
        ],
        category: 'Home',
        subcategory: 'Kitchen',
        stock: 42,
        rating: 4.9,
        reviewCount: 89,
        tags: ['ceramic', 'handmade', 'kitchenware'],
        colors: ['White', 'Blue', 'Green'],
        brand: 'Clay Studio',
        new: true,
    },
    {
        id: '3',
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
        price: 299.99,
        originalPrice: 399.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801057/cristhian_adame_photo-headphones-7503631_1920_ugpaus.jpg',
        '',
        ],
        category: 'Electronics',
        subcategory: 'Audio',
        stock: 28,
        rating: 4.7,
        reviewCount: 312,
        tags: ['wireless', 'noise-cancelling', 'premium'],
        colors: ['Black', 'Silver', 'Rose Gold'],
        brand: 'SoundWave',
        featured: true,
        sale: true,
    },
    {
        id: '4',
        name: 'Organic Cotton T-Shirt',
        description: 'Soft, breathable organic cotton t-shirt. Perfect fit and sustainable manufacturing.',
        price: 34.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771720157/clothes_jwkijk.jpg',
        '',
        ],
        category: 'Clothing',
        subcategory: 'Tops',
        stock: 156,
        rating: 4.6,
        reviewCount: 243,
        tags: ['organic', 'cotton', 'sustainable'],
        colors: ['White', 'Black', 'Navy', 'Gray'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        brand: 'EcoWear',
        new: true,
    },
    {
        id: '5',
        name: 'Modern Floor Lamp',
        description: 'Sleek minimalist floor lamp with adjustable arm and dimmer switch. LED compatible.',
        price: 149.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801866/piro4d-table-2085531_1920_pcj9ec.jpg',
        ],
        category: 'Home',
        subcategory: 'Lighting',
        stock: 34,
        rating: 4.5,
        reviewCount: 67,
        tags: ['lighting', 'modern', 'minimalist'],
        colors: ['Black', 'White', 'Brass'],
        brand: 'Luma Design',
    },
    {
        id: '6',
        name: 'Stainless Steel Water Bottle',
        description: 'Insulated water bottle keeps drinks cold for 24h or hot for 12h. BPA-free.',
        price: 29.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801056/naturefriend-bottles-774466_1920_g11khg.jpg',
        ],
        category: 'Sports',
        subcategory: 'Hydration',
        stock: 189,
        rating: 4.8,
        reviewCount: 421,
        tags: ['insulated', 'sustainable', 'stainless-steel'],
        colors: ['Silver', 'Black', 'Blue', 'Pink'],
        brand: 'HydroLife',
        featured: true,
    },
    {
        id: '7',
        name: 'Yoga Mat Premium',
        description: 'Non-slip yoga mat with extra cushioning. Eco-friendly and easy to clean.',
        price: 69.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802001/pixelcreatures-yoga-940359_1920_tsrxha.jpg',
        // 'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802000/peggy_marco-yoga-4650150_1920_wedekd.jpg',

        ],
        category: 'Sports',
        subcategory: 'Fitness',
        stock: 76,
        rating: 4.7,
        reviewCount: 156,
        tags: ['yoga', 'fitness', 'eco-friendly'],
        colors: ['Purple', 'Blue', 'Pink', 'Gray'],
        brand: 'ZenFlow',
    },
    {
        id: '8',
        name: 'Leather Wallet',
        description: 'Slim leather wallet with RFID protection. Holds 8 cards and cash.',
        price: 49.99,
        originalPrice: 69.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802082/emkal-wallet-4977021_1920_hmnloj.jpg',
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802081/eak_kkk-wallet-1081310_1920_sx4zry.jpg',

        ],
        category: 'Accessories',
        subcategory: 'Wallets',
        stock: 94,
        rating: 4.6,
        reviewCount: 188,
        tags: ['leather', 'rfid', 'slim'],
        colors: ['Brown', 'Black'],
        brand: 'Leather Guild',
        sale: true,
    },
    {
        id: '9',
        name: 'Wireless Charging Pad',
        description: 'Fast wireless charger compatible with all Qi-enabled devices. LED indicator.',
        price: 39.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802319/lenzatic-xbox-4989229_1920_mqcvgy.jpg',
        // 'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802306/pagefact-touch-pad-319840_1920_xcdvtx.jpg',

        ],
        category: 'Electronics',
        subcategory: 'Accessories',
        stock: 134,
        rating: 4.4,
        reviewCount: 276,
        tags: ['wireless', 'fast-charging', 'qi'],
        colors: ['Black', 'White'],
        brand: 'ChargeTech',
    },
    {
        id: '10',
        name: 'Canvas Backpack',
        description: 'Durable canvas backpack with leather straps. Multiple compartments and padded laptop sleeve.',
        price: 89.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801851/joshuaworoniecki-backpack-7832746_1920_qyxbuf.jpg',
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801852/lauraelatimer0-travel-641635_1920_nlhb6y.jpg',

        ],
        category: 'Bags',
        subcategory: 'Backpacks',
        stock: 62,
        rating: 4.7,
        reviewCount: 143,
        tags: ['canvas', 'durable', 'laptop'],
        colors: ['Khaki', 'Navy', 'Black'],
        brand: 'Explorer Co.',
        new: true,
    },
    {
        id: '11',
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery.',
        price: 249.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771802317/indraprojects-smartwatch-8300238_1920_abithu.jpg',
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801082/smw_mhi00t.jpg',
        ],
        category: 'Electronics',
        subcategory: 'Wearables',
        stock: 45,
        rating: 4.5,
        reviewCount: 234,
        tags: ['smartwatch', 'fitness', 'gps'],
        colors: ['Black', 'Silver', 'Rose Gold'],
        brand: 'FitPro',
        featured: true,
    },
    {
        id: '12',
        name: 'Scented Candle Set',
        description: 'Set of 3 hand-poured soy candles with natural fragrances. 40-hour burn time each.',
        price: 44.99,
        images: [
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801852/myriams-fotos-advent-1883820_1920_pekwrs.jpg',
        'https://res.cloudinary.com/drxf8zbyf/image/upload/v1771801853/tantetati-candle-6841162_1920_u9w7j7.jpg',

        ],
        category: 'Home',
        subcategory: 'Decor',
        stock: 118,
        rating: 4.9,
        reviewCount: 95,
        tags: ['candles', 'soy', 'natural'],
        brand: 'Aromatherapy Co.',
        new: true,
    },
    ]

    // Function to get paginated products
    export const getPaginatedProducts = (
    page: number = 1,
    pageSize: number = 12,
    filters?: {
        category?: string
        sortBy?: string
        searchQuery?: string
    }
    ) => {
    let products = [...MOCK_PRODUCTS]

    // Apply filters
    if (filters?.category && filters.category !== 'all') {
        products = products.filter(p => p.category === filters.category)
    }

    if (filters?.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        products = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
        )
    }

    // Apply sorting
    if (filters?.sortBy) {
        switch (filters.sortBy) {
        case 'price-asc':
            products.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            products.sort((a, b) => b.price - a.price)
            break
        case 'popular':
            products.sort((a, b) => b.reviewCount - a.reviewCount)
            break
        case 'newest':
            products.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
            break
        }
    }

    // Paginate
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedProducts = products.slice(start, end)

    return {
        data: paginatedProducts,
        total: products.length,
        page,
        pageSize,
        hasMore: end < products.length,
    }
}