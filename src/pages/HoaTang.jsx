import NavBar2 from "../components/NavBar2"
import { Link } from "react-router-dom"
import { HoaTangProducts } from "../utils/mockData"
import ProductItem from "../components/ProductItem"
import { useState } from "react"

const HoaTang = () => {
  const [products, setProducts] = useState(HoaTangProducts);
  const [showMore, setShowMore] = useState(false);


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
            <span className="text-green-600">Hoa tặng</span>
          </div>
        </div>
        <div className="flex-1 border border-gray-300 rounded-md">
          {/* Sort */}
          <div className="flex items-center justify-end p-11">
          <select 
              className="border-2 border-gray-300 text-sm p-2"
              onChange={(e) => {
                let sortedProducts = [...HoaTangProducts];
                if (e.target.value === 'low-high') {
                  sortedProducts = HoaTangProducts.slice().sort((a, b) => a.price - b.price);
                } else if (e.target.value === 'high-low') {
                  sortedProducts = HoaTangProducts.slice().sort((a, b) => b.price - a.price);
                } else {
                  sortedProducts = HoaTangProducts;
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
              <p>Hoa - món quà của thiên nhiên, hoa mang vẻ đẹp tinh tế, hương thơm quyến rũ cùng với sắc màu rực rỡ mà ai cũng phải đắm chìm khi nhìn thấy. Vượt xa khỏi vẻ đẹp của mình, hoa còn là biểu tượng sống động của cảm xúc, tình yêu và là một thứ ngôn ngữ không lời.</p>
              <p>Hoa là lời tỏ tình, là sự tôn trọng, là niềm an ủi khi khó khăn, là lời chúc đầy ý nghĩa. Với mỗi màu sắc, hình dáng và hương thơm, hoa giữ một lời nhắn nhủ riêng, một ý nghĩa sâu sắc. Và từ đó hoa tặng là một món quà đầy tinh tế để trao gửi thông điệp không thành lời.</p>
              <h3 className="text-lg font-medium">Nguồn gốc tặng hoa</h3>
              <p>Nguồn gốc phong tục tặng hoa xuất phát từ thời tiền sử khi hoa thường được xem là có công dụng chữa bệnh. Các nhà khảo cổ học đã tìm thấy dấu vết cánh hoa ở một số địa điểm mai táng. Ban đầu, hoa được dùng làm vật tế lễ hoặc mai táng. Người Ai Cập cổ đại và sau đó là người Hy Lạp và La Mã đã sử dụng hoa vì mục đích này. </p>
              <p>Các đồ vật mai táng có hình vẽ hoa anh túc đỏ, hoa thanh cúc và hoa súng có niên đại khoảng năm 1540 TCN đã được tìm thấy ở Ai Cập. Ghi chép về việc tặng hoa xuất hiện trong sử sách của Trung Quốc và văn tự chữ tượng hình Ai Cập, cũng như trong thần thoại Hy Lạp và La Mã. Thói quen tặng hoa nở rộ trong thời Trung Cổ khi các cặp đôi thể hiện tình cảm với nhau bằng hoa.</p>
              <p>Ngày nay, với sự phát triển của xã hội, việc tặng hoa ở Việt Nam ngày càng phổ biến. Hoa không còn giới hạn trong các dịp lễ hội hay thờ cúng, mà đã trở thành một cách trao gửi thông điệp yêu thương, thể hiện lòng biết ơn hay lời chúc tốt đẹp trong cuộc sống hàng ngày. </p>
              <p>Tặng hoa trong ngày sinh nhật, ngày lễ phụ nữ 8/3, 20/10 hay đơn giản là một ngày bình thường, để thể hiện tình yêu, sự quan tâm và lòng kính trọng đang ngày càng phổ biến hơn ở Việt Nam.</p>
              <h3 className="text-lg font-medium">Tại sao nên tặng hoa?</h3>
              <p>Hoa đẹp, có màu sắc tươi mới và tràn đầy sức sống. Hoa mang đến nhiều cung bậc cảm xúc nên hoa mang trong mình nhiều ý nghĩa sâu sắc đa dạng và phong phú. Vì vậy, hoa luôn xuất hiện trong các ngày lễ, trong các dịp quan trọng như một điều không thể thiếu. Và trong các dịp quan trọng của một người như Sinh nhật, Tốt nghiệp, Tân Gia … thì tặng hoa chính là để thay lời muốn nói, và trao gửi lời chúc đầy ý nghĩa cho những cột mốc quan trọng trong cuộc đời mỗi người. </p>
              <p>Tặng hoa là một cách để thể hiện tình cảm, lòng kính trọng và lòng biết ơn. Hoa mang lại sự tinh tế, sự đẹp đẽ và sự hấp dẫn cho bất kỳ sự kiện nào. Hoa cũng là một món quà đầy ý nghĩa, được chọn lọc với tình yêu và sự quan tâm đến người nhận.</p>
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

export default HoaTang