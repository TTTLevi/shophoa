import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      setCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),
    }),
    {
      name: "shophoa/cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCartStore
