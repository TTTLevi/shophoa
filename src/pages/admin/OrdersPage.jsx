import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaFilter } from "react-icons/fa"
import { Edit, Trash } from "lucide-react"

import Header from "../../components/admin/common/Header"
import Pagination from "../../components/admin/common/Pagination"

const OrdersPage = () => {
  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [ordersPerPage] = useState(5)
  const [filter, setFilter] = useState({
    price: "desc",
    fromDate: "",
    toDate: "",
  })
  const [filteredOrders, setFilteredOrders] = useState([])

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
      setFilteredOrders(data)
    }
    fetchOrders()
  }, [])

  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilter({
      ...filter,
      [name]: value,
    })
  }

  const handleFilter = () => {
    let filtered = orders;
    if (filter.price === "desc") {
      filtered = filtered.sort((a, b) => b.total - a.total);
    } else {
      filtered = filtered.sort((a, b) => a.total - b.total);
    }
    if (filter.fromDate) {
      filtered = filtered.filter(order => new Date(order.createdAt) >= new Date(filter.fromDate));
    }
    if (filter.toDate) {
      filtered = filtered.filter(order => new Date(order.createdAt) <= new Date(filter.toDate));
    }
    setFilteredOrders(filtered)
  }


  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Đơn hàng' />
      <motion.div
        className='bg-white shadow-lg rounded-xl p-5 border border-gray-200 mt-11 mx-11'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Danh sách đơn hàng</h2>
          <div className="flex justify-between mb-4 bg-gray-100 p-3 rounded-lg flex-col sm:flex-row">
            <div className="flex items-center">
              <label className="mr-2 text-gray-700">Lọc theo giá:</label>
              <select
                name="price"
                value={filter.price}
                onChange={handleFilterChange}
                className="py-2 pl-3 pr-10 text-sm text-gray-700 border border-gray-300 rounded-lg"
              >
                <option value="desc">Cao đến thấp</option>
                <option value="asc">Thấp đến cao</option>
              </select>
            </div>

            <div className="flex gap-3 mt-3 sm:mt-0">
              <div className="flex items-center">
                <label className="mr-1 text-gray-700">Từ ngày:</label>
                <input
                  type="date"
                  name="fromDate"
                  value={filter.fromDate}
                  onChange={handleFilterChange}
                  className="py-2 pl-3 pr-3 text-sm text-gray-700 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <label className="mr-1 text-gray-700">Đến ngày:</label>
                <input
                  type="date"
                  name="toDate"
                  value={filter.toDate}
                  onChange={handleFilterChange}
                  className="py-2 pl-3 pr-3 text-sm text-gray-700 border border-gray-300 rounded-lg"
                />
              </div>

              <button 
                onClick={handleFilter}
                className="relative min-w-[90px] bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center">
                Lọc
                <FaFilter className="absolute right-4" />
              </button>

            </div>
          </div>
          <table className="w-full text-sm text-gray-700 border-collapse">
            <thead>
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
            <tbody>
              {currentOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{order.id}</td>
                  <td className="px-4 py-2 border-b">{order.customer}</td>
                  <td className="px-4 py-2 border-b">
                    <select
                      value={order.status}
                      onChange={() => {
                        // Cập nhật tình trạng đơn hàng

                      }}
                      className="py-2 pl-3 pr-10 text-sm text-gray-700 border border-gray-300 rounded-lg"
                    >
                      <option value="processing">Đang xử lý</option>
                      <option value="shipping">Đang giao hàng</option>
                      <option value="delivered">Đã giao</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 border-b">{order.address}</td>
                  <td className="px-4 py-2 border-b">{order.total}</td>
                  <td className="px-4 py-2 border-b">{order.createdAt}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => {
                        // Chỉnh sửa đơn hàng
                      }}
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded-lg mr-2"
                    >
                      <Edit size={21} className="inline-block text-green-300 hover:cursor-pointer" />
                    </button>
                    <button
                      onClick={() => {
                        // Xóa đơn hàng
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg"
                    >
                      <Trash size={21} className="inline-block text-yellow-200 hover:cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsPerPage={ordersPerPage}
            totalItems={orders.length}
            paginate={paginate}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default OrdersPage
