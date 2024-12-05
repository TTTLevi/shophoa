import { useState } from 'react';
import Header from "../../components/admin/common/Header";
import Model from "../../components/Model";
import EditCategory from "../../components/admin/category/EditCategory";
import { motion } from 'framer-motion';

const Category = () => {
  const [categories, setCategories] = useState([
    { name: 'Hoa Hồng', code: 'hoa-hong' },
    { name: 'Hoa Lan', code: 'hoa-lan' },
    { name: 'Hoa Cúc', code: 'hoa-cuc' }
  ]);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const handleUpdateCategory = (index, newName) => {
    const updatedCategories = categories.map((category, i) =>
      i === index ? { ...category, name: newName, code: newName.trim().toLowerCase().replace(/\s+/g, '-') } : category
    );
    setCategories(updatedCategories);
  };

  const handleAddCategory = (newName) => {
    const newCategory = { name: newName, code: newName.trim().toLowerCase().replace(/\s+/g, '-') };
    setCategories([...categories, newCategory]);
    setIsModelOpen(false);
  };

  const handleEditCategory = (index) => {
    setIsEdit(true);
    setCategoryId(index);
    setIsModelOpen(true);
  };

  const handleAdd = () => {
    setIsEdit(false);
    setIsModelOpen(true);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10  min-h-screen">
      <Header title='Danh mục sản phẩm' />
      <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-5 border border-gray-700 mt-11 ml-11 mr-11'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-2">
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-orange-500'>Danh sách danh mục</h2>
            <button
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              Thêm
            </button>
          </div>

          <table className="min-w-full bg-white mt-6 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-gray-600">STT</th>
                <th className="py-3 px-4 text-left text-gray-600">Tên danh mục</th>
                <th className="py-3 px-4 text-left text-gray-600">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index} className="border-t">
                  <td className="border px-4 py-3">{index + 1}</td>
                  <td className="border px-4 py-3">{category.name}</td>
                  <td className="border px-4 py-3">
                    <button
                      onClick={() => handleDeleteCategory(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300 mr-2"
                    >
                      Xóa
                    </button>
                    <button
                      onClick={() => handleEditCategory(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition duration-300"
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <Model
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
      >
        <EditCategory
          isEdit={isEdit}
          categoryId={categoryId}
          handleUpdateCategory={handleUpdateCategory}
          handleAddCategory={handleAddCategory}
          categoryName={categories[categoryId] && categories[categoryId].name}
        />
      </Model>
    </div>
  );
};

export default Category;
