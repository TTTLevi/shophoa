import { ClipboardList, ShoppingBag, Users, Zap } from "lucide-react"
import Header from "../../components/admin/common/Header"
import StatCard from "../../components/admin/common/StatCard"
import {motion} from 'framer-motion'

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title='Tổng quan'/>
      
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-col-4 mb-7"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <StatCard
              name="Tổng doanh thu" icon={Zap} value='1000 VNĐ' color='#6366F1'
            />
            <StatCard
              name="Số người dùng" icon={Users} value='10' color='#8b5cf6'
            />
            <StatCard
              name="Số đơn hàng" icon={ClipboardList} value='3' color='#ec4899'
            />
            <StatCard
              name="Tổng sản phẩm" icon={ShoppingBag} value='21' color='#10b981'
            />
          </motion.div>
        </main>
    </div>
  )
}

export default OverviewPage