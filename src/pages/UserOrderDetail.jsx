import { listData } from "../utils/mockData"

const OrderDetail = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center">
          <img src={listData[0].image} alt="" className="w-16 h-16 sm:w-20 sm:h-20  object-cover rounded-lg" />
          <div className="ml-4">
            <p className="font-medium sm:text-base">{listData[0].name}</p>

            <div className="flex items-center mt-2 gap-3 text-base text-gray-700">
              <span className="text-gray-500">Số lượng: 1</span>

              <span className="mx-2">|</span>

              <span className="text-gray-500">Đơn giá: {listData[0].price.toLocaleString()}đ</span>

              <span className="mx-2">|</span>

              <span className="text-gray-500">Tổng: {(listData[0].price * 1).toLocaleString()}đ</span>
            </div>

          </div>
        </div>
      </div>
    </div>
      )
}

      export default OrderDetail