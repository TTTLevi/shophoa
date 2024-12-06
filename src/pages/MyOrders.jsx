import Parcel from '../assets/images/parcel_icon.png';
import { useState } from 'react';
import Model from '../components/Model';
import OrderDetail from './UserOrderDetail';

const MyOrders = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleViewDetail = () => {
    setIsModelOpen(true);
  }

  const orders = [
    { id: 1, customer: "Nguyễn Văn A", status: "processing", address: "123 Nguyễn Trãi, Hà Nội", total: 100000, createdAt: "2023-03-01" },
    { id: 2, customer: "Nguyễn Văn B", status: "shipping", address: "456 Lê Thánh Tôn, Hà Nội", total: 200000, createdAt: "2023-03-02" },
    { id: 3, customer: "Nguyễn Văn C", status: "delivered", address: "789 Trần Hưng Đạo, Hà Nội", total: 300000, createdAt: "2023-03-03" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-11 min-h-[360px]">
      <div className="border-t pt-5">
        <p className="text-2xl font-bold text-orange-500 mb-4">Các đơn hàng của tôi</p>

        <div>

          {orders.map(order => (
            <div key={order.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-b text-gray-700">
              <div className="flex items-center">
                <img src={Parcel} className='w-10 h-10' alt="" />
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Mã đơn hàng:</span>
                <span>{order.id}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Ngày đặt:</span>
                <span>{order.createdAt}</span>
              </div>

              <div className="flex items-center">
                <span className="font-semibold w-24">Trạng thái:</span>
                <span>{order.status}</span>
              </div>

              <div className="flex items-center">
                <span className="font-semibold w-24">Tổng tiền:</span>
                <span>{order.total}</span>
              </div>

              <div className="flex items-center">
                <button className="text-blue-500" onClick={handleViewDetail}>Xem chi tiết</button>
              </div>
            </div>
          ))}

        </div>

      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        <OrderDetail />
      </Model>
    </div>
  )
}

export default MyOrders
