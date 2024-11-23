import {motion} from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const categoryData = [
  { name: "Hoa Chúc Mừng", value: 10 },
	{ name: "Hoa Chia Buồn", value: 10 },
	{ name: "Hoa Tặng & Hoa Dịch Vụ", value: 20 },
	{ name: "Hoa Chậu Thiết Kế", value: 20 },
	{ name: "Cây Xanh", value: 20 },
];

const COLORS = ["#4F46E5", "#A57FF2", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0. }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>Phân loại theo danh mục</h2>
      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx='50%'
              cy='50%'
              labelLine={true}
              outerRadius={70}
              fill='#8884d8'
              dataKey="value"
              label = {({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%` }
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default CategoryDistributionChart