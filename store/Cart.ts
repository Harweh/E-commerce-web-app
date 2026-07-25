import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState } from '@/types'

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
        items: [],
        
        addItem: (product, quantity = 1, color, size) => {
            const items = get().items
            const existingItemIndex = items.findIndex(
            item => 
                item.product.id === product.id &&
                item.selectedColor === color &&
                item.selectedSize === size
            )

            if (existingItemIndex > -1) {
            const newItems = [...items]
            newItems[existingItemIndex].quantity += quantity
            set({ items: newItems })
            } else {
            set({ 
                items: [...items, { 
                product, 
                quantity, 
                selectedColor: color, 
                selectedSize: size 
                }] 
            })
            }
        },

        // Note: CartState's removeItem/updateQuantity signatures only take a
        // productId (see types/index.ts). To correctly target one variant
        // among several for the same product, pass color/size as optional
        // extra args — existing callers that only pass productId still work
        // and will match the first item with that product id.
        removeItem: (productId, color, size) => {
            set({
            items: get().items.filter(item => 
                !(item.product.id === productId &&
                    (color === undefined || item.selectedColor === color) &&
                    (size === undefined || item.selectedSize === size))
            )
            })
        },

        updateQuantity: (productId, quantity, color, size) => {
            if (quantity <= 0) {
            get().removeItem(productId, color, size)
            return
            }
            
            const items = get().items
            const itemIndex = items.findIndex(item => 
                item.product.id === productId &&
                (color === undefined || item.selectedColor === color) &&
                (size === undefined || item.selectedSize === size)
            )
            
            if (itemIndex > -1) {
            const newItems = [...items]
            newItems[itemIndex] = { ...newItems[itemIndex], quantity }
            set({ items: newItems })
            }
        },

        clearCart: () => {
            set({ items: [] })
        },

        getTotalPrice: () => {
            return get().items.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
            )
        },

        getTotalItems: () => {
            return get().items.reduce((total, item) => total + item.quantity, 0)
        },
        }),
        {
        name: 'cart-storage',
        }
    )
)