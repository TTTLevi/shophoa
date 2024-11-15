import { create } from "zustand"
import { listData } from "../utils/mockData"

const useStore = create((set) => ({
  listProducts: listData,
  setListProducts: (products) => set({ listProduct: products }),
}))

export default useStore
