import { motion } from 'framer-motion'
import { UsersIcon, UserPlus, UserCheck } from 'lucide-react'

import Header from '../../components/admin/common/Header'
import StatCard from '../../components/admin/common/StatCard'
import UsersTable from '../../components/admin/users/UsersTable'

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Số người dùng' icon={UsersIcon} value={7} color='#6366F1' />
					<StatCard name='Người dùng mới hôm nay' icon={UserPlus} value={0} color='#10B981' />
					<StatCard name='Người dùng active' icon={UserCheck} value={23} color='#F59E0B' />
				</motion.div>

        {/* UserTABLE */}
        <UsersTable />
      </main>
    </div>
  )
}

export default UsersPage