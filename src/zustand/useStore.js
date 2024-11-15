import { create } from "zustand"


const useStore = create((set) => ({
  hoaTangProducts: [],
  hoaChauProducts: [],
  hoaChiaBuonProducts:[], 
  cayXanhProducts:[],
  hoaChucMungProducts:[],
  setHoaTangProducts: (products) => set({ hoaTangProducts: products }),
  setHoaChauProducts: (products) => set({ hoaChauProducts: products }),
  setHoaChiaBuonProducts: (products) => set({ hoaChiaBuonProducts: products }),
  setCayXanhProducts: (products) => set({ cayXanhProducts: products }),
  setHoaChucMungProducts: (products) => set({ hoaChucMungProducts: products }),

}))

export default useStore