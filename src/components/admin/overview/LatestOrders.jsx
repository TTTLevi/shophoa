import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LatestOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = [
        { id: 1, customer: "Nguyễn Văn A", status: "processing", address: "123 Nguyễn Trãi, Hà Nội", total: 100000, createdAt: "2023-03-01" },
        { id: 2, customer: "Nguyễn Văn B", status: "shipping", address: "456 Lê Thánh Tôn, Hà Nội", total: 200000, createdAt: "2023-03-02" },
        { id: 3, customer: "Nguyễn Văn C", status: "delivered", address: "789 Trần Hưng Đạo, Hà Nội", total: 300000, createdAt: "2023-03-03" },
        { id: 4, customer: "Nguyễn Văn D", status: "processing", address: "123 Nguyễn Trãi, Hà Nội", total: 400000, createdAt: "2023-03-04" },
        { id: 5, customer: "Nguyễn Văn E", status: "shipping", address: "456 Lê Thánh Tôn, Hà Nội", total: 500000, createdAt: "2023-03-05" },
        { id: 6, customer: "Nguyễn Văn F", status: "delivered", address: "789 Trần Hưng Đạo, Hà Nội", total: 600000, createdAt: "2023-03-06" },
        { id: 7, customer: "Nguyễn Văn G", status: "processing", address: "123 Nguyễn Trãi, Hà Nội", total: 700000, createdAt: "2023-03-07" },
        { id: 8, customer: "Nguyễn Văn H", status: "shipping", address: "456 Lê Thánh Tôn, Hà Nội", total: 800000, createdAt: "2023-03-08" },
        { id: 9, customer: "Nguyễn Văn I", status: "delivered", address: "789 Trần Hưng Đạo, Hà Nội", total: 900000, createdAt: "2023-03-09" },
        { id: 10, customer: "Nguyễn Văn J", status: "processing", address: "123 Nguyễn Trãi, Hà Nội", total: 1000000, createdAt: "2023-03-10" },
      ]
      setOrders(data)
    }
    fetchOrders()
  }, [])

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700 md:col-span-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0. }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Danh sách đơn hàng mới đặt</h2>

      <table className="w-full text-sm text-gray-700 border-collapse">
        <thead className='bg-gray-200'>
          <tr>
            <th className="px-4 py-2 border-b text-left">ID</th>
            <th className="px-4 py-2 border-b text-left">Khách hàng</th>
            <th className="px-4 py-2 border-b text-left">Tình trạng</th>
            <th className="px-4 py-2 border-b text-left">Địa chỉ</th>
            <th className="px-4 py-2 border-b text-left">Tổng tiền</th>
            <th className="px-4 py-2 border-b text-left">Ngày tạo</th>
            <th className="px-4 py-2 border-b text-left">Chức năng</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {orders.slice(0, 5).map(order => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{order.id}</td>
              <td className="px-4 py-2 border-b">{order.customer}</td>
              <td className="px-4 py-2 border-b">
                {order.status === 'processing' && <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">Đang xử lý</span>}
                {order.status === 'shipping' && <span className="bg-blue-500 text-white px-2 py-1 rounded-full">Đang giao hàng</span>}
                {order.status === 'delivered' && <span className="bg-green-500 text-white px-2 py-1 rounded-full">Đã giao</span>}
              </td>
              <td className="px-4 py-2 border-b">{order.address}</td>
              <td className="px-4 py-2 border-b">{order.total}</td>
              <td className="px-4 py-2 border-b">{order.createdAt}</td>
              <td className="px-4 py-2 border-b">
                <Link to={`/admin/orders/${order.id}`} className="inline-block text-blue-500 hover:cursor-pointer mr-2">
                  <Eye size={21} className="inline-block text-blue-500 hover:cursor-pointer" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default LatestOrders;
