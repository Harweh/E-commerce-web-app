import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthState, User } from '@/types'

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
        user: null,
        isAuthenticated: false,

        login: async (email: string, password: string) => {
            // Simulated login - replace with actual API call
            try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Mock successful login
            const user: User = {
                id: '1',
                email,
                name: email.split('@')[0],
                createdAt: new Date(),
            }
            
            set({ user, isAuthenticated: true })
            } catch (error) {
            throw new Error('Login failed')
            }
        },

        register: async (name: string, email: string, password: string) => {
            // Simulated registration - replace with actual API call
            try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            const user: User = {
                id: '1',
                email,
                name,
                createdAt: new Date(),
            }
            
            set({ user, isAuthenticated: true })
            } catch (error) {
            throw new Error('Registration failed')
            }
        },

        logout: () => {
            set({ user: null, isAuthenticated: false })
        },
        }),
        {
        name: 'auth-storage',
        }
    )
)