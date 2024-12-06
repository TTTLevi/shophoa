import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { Edit, Search, Trash2 } from 'lucide-react'

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "Active" },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(userData)

  const navigate = useNavigate()

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = userData.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term))
    setFilteredUsers(filtered)
  }

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-orange-500'>Users</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Tìm kiếm...'
            className='bg-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead className='bg-gray-200 '>
            <tr>
              <th className='px-5 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Họ tên
              </th>
              <th className='px-5 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Email
              </th>
              <th className='px-5 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Vai trò
              </th>
              <th className='px-5 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Trạng thái
              </th>
              <th className='px-5 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Hành động
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700 bg-white'>
            {filteredUsers.map((user) => (
              <motion.tr key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-5 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'>
                      <div className='h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>{user.name}</div>
                    </div>
                  </div>
                </td>

                <td className='px-5 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900'>{user.email}</div>
                </td>

                <td className='px-5 py-4 whitespace-nowrap'>
                  <span className='px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                    {user.role}
                  </span>
                </td>

                <td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "text-green-100 bg-blue-700"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button 
                    className='text-indigo-400 hover:text-indigo-300 mr-2'
                    onClick={() => navigate(`/admin/users/${user.id}`)}  
                  ><Edit size={21} /></button>
									<button className='text-red-400 hover:text-red-300'><Trash2 size={21} /></button>
								</td>

              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default UsersTable