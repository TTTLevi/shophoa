import { motion } from 'framer-motion'
import Header from '../../components/admin/common/Header'

const OrderDetail = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Chi tiết đơn hàng' />
      <motion.div
        className='bg-white shadow-lg rounded-xl p-5 border border-gray-200 mt-11 mx-11'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className='flex sm:flex-col gap-5 sm:gap-7'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='border-[2px] p-3 min-w-[350px]'>
              <p className='text-lg font-semibold text-green-700'>Mã hóa đơn</p>
              <p>12315</p>
            </div>

            <div className='border-[2px] p-3 min-w-[350px]'>
              <p className='text-lg font-semibold text-green-700'>Khách hàng</p>
              <p>Nguyễn Văn A</p>
            </div>

            <div className='border-[2px] p-3 min-w-[350px]'>
              <p className='text-lg font-semibold text-green-700'>Ngày tạo</p>
              <p>2023-03-01</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between'>
            <div className='border-[2px] p-3 min-w-[350px]'>
              <p className='text-lg font-semibold text-green-700'>Địa chỉ</p>
              <p>12315ádsada</p>
            </div>

            <div className='border-[2px] p-3 min-w-[350px] '>
              <p className='text-lg font-semibold text-green-700'>Phương thức thanh toán</p>
              <p>Thanh toán khi nhận hàng</p>
            </div>

            <div className='border-[2px] p-3 min-w-[350px] '>
              <p className='text-lg font-semibold text-green-700'>Tình trạng</p>
              <p>Đang giao</p>
            </div>
          </div>

          <div className='flex w-full justify-center px-3 border-[2px]'>
            <table className='w-full text-sm text-gray-700 border-collapse'>
              <thead className='bg-yellow-200'>
                <tr>
                  <th className='px-4 py-2 border-b text-left'>ID</th>
                  <th className='px-4 py-2 border-b text-left'>Tên sản phẩm</th>
                  <th className='px-4 py-2 border-b text-left'>Số lượng</th>
                  <th className='px-4 py-2 border-b text-left'>Đơn giá</th>
                  <th className='px-4 py-2 border-b text-left'>Thành tiền</th>
                </tr>
              </thead>
              <tbody className='flex-1'>
                <tr>
                  <td className='px-4 py-2 border-b'>1</td>
                  <td className='px-4 py-2 border-b'>Áo thun</td>
                  <td className='px-4 py-2 border-b'>2</td>
                  <td className='px-4 py-2 border-b'>100000</td>
                  <td className='px-4 py-2 border-b'>200000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='flex flex-col md:flex-row justify-end'>

            <div className=''>
              <p className='text-md font-semibold text-red-500'>Tổng tiền</p>
              <p className='flex justify-end'>200000</p>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default OrderDetail