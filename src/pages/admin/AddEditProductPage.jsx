import { motion } from 'framer-motion'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import Header from "../../components/admin/common/Header"
import UploadImg from "../../assets/images/upload_area.jpg"
import { Categories } from '../../utils/mockData'

const AddEditProductPage = () => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [theme, setTheme] = useState('')
  const [price, setPrice] = useState('')
  const [unit, setUnit] = useState("Kệ")
  const [description, setDescription] = useState('')

  const handleDescriptionChange = (value) => {
    setDescription(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(category)
    console.log(theme)
    console.log(price)
    console.log(unit)
    console.log(description)
  }


  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title='Thêm sản phẩm' />
      <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700 mt-11 ml-11 mr-11'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form action="" className='flex flex-col w-full items-start gap-3'>
          <div>
            <p className='mb-2 font-semibold text-yellow-300'>Chọn hình</p>

            <div className='flex gap-5'>
              <label htmlFor="image1">
                <img src={!image1 ? UploadImg : URL.createObjectURL(image1)} alt="" className="w-36 h-36 object-cover rounded-lg cursor-pointer" />
                <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
              </label>
              <label htmlFor="image2">
                <img src={!image2 ? UploadImg : URL.createObjectURL(image2)} alt="" className="w-36 h-36 object-cover rounded-lg cursor-pointer" />
                <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
              </label>
              <label htmlFor="image3">
                <img src={!image3 ? UploadImg : URL.createObjectURL(image3)} alt="" className="w-36 h-36 object-cover rounded-lg cursor-pointer" />
                <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
              </label>
            </div>
          </div>

          <div className='w-full'>
            <div className='text-yellow-300 mb-2'>Tên sản phẩm</div>
            <input 
              type="text"
              onChange={(e)=>setName(e.target.value)}
              value={name} 
              className='w-full max-w-[500px] px-3 py-2 text-gray-700 bg-white rounded-lg outline-teal-500' 
              required />
          </div>

          <div className='w-full'>
            <div className='text-yellow-300 mb-2'>Danh mục sản phẩm</div>
            <select 
              onChange={(e)=>setCategory(e.target.value)}
              name="category" id="category" 
              className='w-full max-w-[500px] px-3 py-2 text-gray-700 bg-white rounded-lg outline-teal-500'
              required>
              {Categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className='w-full'>
            <div className='text-yellow-300 mb-2'>Chủ đề</div>
            <input 
              type="text" 
              onChange={(e)=>setTheme(e.target.value)}
              value={theme}
              className='w-full max-w-[500px] px-3 py-2 text-gray-700 bg-white rounded-lg outline-teal-500' 
              required />
          </div>

          <div className="w-full">
            <div className="text-yellow-300 mb-2">Mô tả sản phẩm</div>
            <ReactQuill
              className='bg-white'
              theme="snow" value={description} onChange={handleDescriptionChange}
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-3 sm:gap-9'>
            <div>
              <div className='text-yellow-300 mb-2'>Giá bán</div>
              <input 
                type="number" 
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                className='w-full sm:w-[200px] px-3 py-2 text-gray-700 bg-white rounded-lg outline-teal-500' 
                required />
            </div>
            <div>
              <div className='text-yellow-300 mb-2'>Đơn vị tính</div>
              <select 
                onChange={(e)=>setUnit(e.target.value)}
                className='w-full px-3 py-2 rounded-lg sm:w-[200px]'
                name="" id="">
                <option value="Bình">Bình</option>
                <option value="Bó">Bó</option>
                <option value="Chậu">Chậu</option>
                <option value="Kệ">Kệ</option>
              </select>
            </div>
          </div>

          <div className='flex justify-center w-full mt-11'>
            <button
              className='w-[50%] px-6 py-2 bg-yellow-300 text-gray-800 rounded-full hover:bg-yellow-400 transition duration-200'
              onClick={handleSubmit}
            >
              Lưu
            </button>
          </div>

        </form>

        {/* <div dangerouslySetInnerHTML={{__html:description}} /> */}
      </motion.div>
    </div>
  )
}

export default AddEditProductPage