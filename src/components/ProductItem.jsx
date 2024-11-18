import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import useCartStore from "../zustand/useCartStore"
import { listData } from "../utils/mockData"
import { toast } from "react-toastify"

const ProductItem = ({ product }) => {
  const navigate = useNavigate()

  // const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart)

  const handleClickProduct = (id) => {
    navigate(`/product-detail/${id}`)
  }

  const handleAddCart = (id) => {
    const foundProduct = listData.find((el) => el.id === id)
    if (foundProduct) {
      addToCart(foundProduct, 1)
      toast.success(`Đã thêm ${foundProduct.name} vào giỏ hàng!`, {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="border-[1px] border-gray-300 rounded-md overflow-hidden"
        onClick={() => handleClickProduct(product.id)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price} VNĐ</p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleAddCart(product.id)}
          className="bg-[#ED1D24] text-white px-3 py-[5px] text-sm rounded-full flex items-center gap-2 hover:bg-[#00833d]"
        >
          Mua ngay
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#ED1D24] bg-white rounded-full"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: PropTypes.array.isRequired,
}
