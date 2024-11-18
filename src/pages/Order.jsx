import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Order = ({ order }) => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">Cảm ơn bạn đã đặt hàng</h3>
          <p className="text-gray-600">Đơn hàng của bạn đã được ghi nhận</p>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Thông tin đơn hàng</h4>
            <p className="text-gray-600">Số đơn hàng: <span className="font-medium">{order.orderNumber}</span></p>
            <p className="text-gray-600">Ngày đặt hàng: <span className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</span></p>
          </div>

          <div className="border-b pb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Thông tin người nhận</h4>
            <div className="space-y-2">
              <p className="text-gray-600">Họ tên: <span className="font-medium">{order.fullName}</span></p>
              <p className="text-gray-600">Email: <span className="font-medium">{order.email}</span></p>
              <p className="text-gray-600">Số điện thoại: <span className="font-medium">{order.phone}</span></p>
              <p className="text-gray-600">Địa chỉ: <span className="font-medium">{order.address} {order.ward} {order.district}</span></p>
            </div>
          </div>

          <div className="border-b pb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Thông tin sản phẩm</h4>
            <div className="space-y-4">
              {order.products.map((product) => (
                <div key={product.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-gray-500">Số lượng: {product.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-gray-800">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price * product.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Tổng tiền:</span>
            <span className="text-orange-500">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.totalAmount)}
            </span>
          </div>

          <div className="text-center pt-4">
            <Link 
              to="/"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order

Order.propTypes = {
  order: PropTypes.object.isRequired
}
