import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestOrders = () => {
  const orders = [
    { id: 1, customer: 'Nguyễn Văn A', total: '1500 VNĐ', status: 'Đã giao', date: '2023-10-01' },
    { id: 2, customer: 'Trần Thị B', total: '2000 VNĐ', status: 'Đang xử lý', date: '2023-10-02' },
    { id: 3, customer: 'Lê Văn C', total: '2500 VNĐ', status: 'Đã hủy', date: '2023-10-03' },
    { id: 4, customer: 'Phạm Thị D', total: '3000 VNĐ', status: 'Đã giao', date: '2023-10-04' },
    { id: 5, customer: 'Hoàng Văn E', total: '3500 VNĐ', status: 'Đang xử lý', date: '2023-10-05' },
  ];

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700 md:col-span-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0. }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Danh sách đơn hàng mới đặt</h2>
      <table className="w-full text-sm text-left text-gray-500 border rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Order ID</th>
            <th scope="col" className="px-6 py-3">Khách</th>
            <th scope="col" className="px-6 py-3">Tổng tiền</th>
            <th scope="col" className="px-6 py-3">Tình trạng</th>
            <th scope="col" className="px-6 py-3">Ngày</th>
            <th scope="col" className="px-6 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="bg-white border-b hover:bg-opacity-50">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.customer}</td>
              <td className="px-6 py-4">{order.total}</td>
              <td className="px-6 py-4">{order.status}</td>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4">
                <Link to={`/admin/order/${order.id}`} className="text-blue-500 hover:underline">
                  <Eye size={21} />
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
