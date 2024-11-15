import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar2 from '../components/NavBar2'
import ProductItem from '../components/ProductItem'
import { CayXanhProducts } from '../utils/mockData'

const CayXanh = () => {
  const [showMore, setShowMore] = useState(false);

  const [products, setProducts] = useState(CayXanhProducts);



  return (
    <div>
      <div>
        <NavBar2 />
      </div>
      <div className="container mx-auto px-4 md:px-16 lg:px-20 py-4">
        <div>
          <div className="container mx-auto px-4 py-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-green-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-green-600">Cây xanh</span>
          </div>
        </div>
        <div className="flex-1 border border-gray-300 rounded-md">
          {/* Sort */}
          <div className="flex items-center justify-end p-11">
            <select 
              className="border-2 border-gray-300 text-sm p-2"
              onChange={(e) => {
                let sortedProducts = [...CayXanhProducts];
                if (e.target.value === 'low-high') {
                  sortedProducts = CayXanhProducts.slice().sort((a, b) => a.price - b.price);
                } else if (e.target.value === 'high-low') {
                  sortedProducts = CayXanhProducts.slice().sort((a, b) => b.price - a.price);
                } else {
                  sortedProducts = CayXanhProducts;
                }
                setProducts(sortedProducts);
              }}
            >
              <option value="relevane">Sắp xếp</option>
              <option value="low-high">Giá thấp đến cao</option>
              <option value="high-low">Giá cao đến thấp</option>
            </select>
          </div>
          {/*Map Product */}
          <div className="px-11 pb-11">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="my-11 border border-gray-300 rounded-md">
          <div className="p-7 space-y-4">
            <div className={`space-y-4 ${!showMore ? 'line-clamp-2' : ''}`}>
              <p>
                Với xu hướng xanh hóa, trồng cây xanh trong nhà hoặc nơi làm việc ngày càng được chú trọng. Cây cảnh đóng vai trò cốt lõi trong việc kiến tạo những mảng xanh trong lành dịu mát, giúp thanh lọc không khí, giảm bức xạ nhiệt, tăng sắc xanh và làm dịu đi những căng thẳng trong cuộc sống.
              </p>
              <h3 className="text-lg font-medium">Cây cảnh là gì?</h3>
              <p>
                Cây cảnh, hay còn gọi là cây kiểng, là những loại cây xanh được trồng và chăm sóc với mục đích trang trí và làm đẹp không gian. Cây cảnh ứng dụng để trang trí trong nhà, văn phòng làm việc hoặc ngoài trời và thường có hình dạng, màu sắc, hoa hoặc lá đẹp.
              </p>
              <p>
                Cây cảnh có rất nhiều loại và kiểu dáng đa dạng. Tùy vào nhu cầu sử dụng khác nhau mà có các loại như cây kiểng lá, hoa kiểng, cây bonsai cũng như các loại cây cảnh mini để bàn hoặc cây phong thủy.
              </p>
              <h3 className="text-lg font-medium">Cây kiểng lá là gì?</h3>
              <p>
                Cây kiểng lá là các loại cây cảnh được trồng và yêu mến nhờ những chiếc lá đẹp mắt của chúng. Những chiếc lá này thường có hình dáng độc đáo, màu sắc đa dạng cũng như đủ loại kích thước.
                Cây kiểng lá không chỉ tô điểm cho không gian sống mà còn giúp cải thiện chất lượng không khí, tạo cảm giác thư giãn và mang lại may mắn, tài lộc.
                Một số loại cây kiểng lá phổ biến Monstera, Đa Đại Phúc, Đế Vương, Trầu Bà Khuyết, Vạn Niên Thanh, Cung Đàn, Đuôi Công, Đuôi Phụng v.v
              </p>
              <h3 className="text-lg font-medium">Cây hoa kiểng là gì?</h3>
              <p>
                Giống như các loại cây kiểng lá được yêu thích nhờ hình dáng độc đáo của lá, cây hoa kiểng là những loại cây được trồng chủ yếu vì màu sắc rực rỡ và hương thơm quyến rũ của hoa. Cây được trồng với mục đích trang trí, làm đẹp không gian sống.
              </p>
              <p>
                Cây hoa kiểng có thể được trồng trong chậu hoặc trực tiếp trên đất, và có thể trồng trong nhà, ban công hoặc ngoài trời, tùy thuộc vào từng loại cây và yêu cầu về điều kiện môi trường sống của cây.
                Có nhiều loại hoa chậu khác nhau như hoa Hồng, hoa Lan, Cẩm Tú Cầu, Tiểu Quỳnh, Bâng Khuâng, Calla Lily v.v
              </p>
              <h3 className="text-lg font-medium">Cây xanh có vai trò gì trong cuộc sống?</h3>
              <p>
                Cây xanh có vai trò quan trọng trong việc tạo ra môi trường sống không gian sống, giúp thanh lọc không khí, giảm bức xạ nhiệt, tăng sắc xanh và làm dịu đi những căng thẳng trong cuộc sống.
              </p>
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              {showMore ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CayXanh