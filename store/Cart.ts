import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState, Product } from '@/types'

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

        removeItem: (productId) => {
            set({ items: get().items.filter(item => item.product.id !== productId) })
        },

        updateQuantity: (productId, quantity) => {
            if (quantity <= 0) {
            get().removeItem(productId)
            return
            }
            
            const items = get().items
            const itemIndex = items.findIndex(item => item.product.id === productId)
            
            if (itemIndex > -1) {
            const newItems = [...items]
            newItems[itemIndex].quantity = quantity
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