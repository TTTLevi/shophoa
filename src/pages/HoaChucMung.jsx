import { useState } from "react"
import { Link } from "react-router-dom"
import NavBar2 from "../components/NavBar2"
import ProductItem from "../components/ProductItem"
import {HoaChucMungProducts} from "../utils/mockData"

const HoaChucMung = () => {
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
            <span className="text-green-600">Hoa chúc mừng</span>
          </div>
        </div>
        <div className="flex-1 border border-gray-300 rounded-md">
          {/* Sort */}
          <div className="flex items-center justify-end p-11">
            <select className="border-2 border-gray-300 text-sm p-2">
              <option value="relevane">Sắp xếp</option>
              <option value="low-high">Giá thấp đến cao</option>
              <option value="high-low">Giá cao đến thấp</option>
            </select>
          </div>
          {/*Map Product */}
          <div className="px-11 pb-11">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {HoaChucMungProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="my-11 border border-gray-300 rounded-md">
          <div className="p-7 space-y-4">
            <div className={`space-y-4 ${!showMore ? 'line-clamp-2' : ''}`}>
              <p>Mỗi một bước chân trên con đường thành công đều đáng để dừng lại, ăn mừng và bày tỏ lòng biết ơn với những nỗ lực mà mỗi chúng ta đều đã cố gắng. Ngày khai trương luôn là một dấu mốc quan trọng như vậy. Hoa chúc mừng khai trương không chỉ là một món quà để trao tặng mà còn là lời chúc mừng thành công dành. Lựa chọn hoa khai trương không chỉ đơn thuần là chọn một bó hoa đẹp mà cũng cần có ý nghĩa. Đó còn là cách truyền đạt lời chúc may mắn, thành công và thịnh vượng.</p>
              <h3 className="text-lg font-medium">Hoa khai trương là gì?</h3>
              <p>Hoa khai trương (hoa chúc mừng) các loại bông hoa và lá cây được lựa chọn, sắp xếp cắm đẹp mắt trong một giỏ hoa, lẵng hoa hoặc trên kệ hoa lớn. Mỗi bông hoa, cành lá, mỗi màu sắc và thậm chí cả mỗi chiếc nơ, giấy gói, tất cả đều mang ý nghĩa, tạo nên một thông điệp mạnh mẽ, gửi gắm lời chúc tốt đẹp nhất. Một giỏ hoa khai trương đẹp không chỉ đơn giản là sự kết hợp của màu sắc và hương thơm, mà còn là biểu hiện cho sự tươi vui, niềm hy vọng và những lời chúc phúc tràn đầy may mắn, thịnh vượng.</p>
              <h3 className="text-lg font-medium">Tặng hoa khai trương cho ai?</h3>
              <p>Hoa khai trương được xem như là món quà yêu thương dành tặng cho bạn bè, người thân hay đối tác kinh doanh khi họ bắt đầu một trang mới trong cuộc đời. Dù là khai trương cửa hàng mới, văn phòng mới hay chào mừng một công ty mới đi vào hoạt động - hoa khai trương chính là dấu ấn khởi đầu, đầy ý nghĩa và tràn đầy lời chúc phúc.</p>
              <h3 className="text-lg font-medium">Ý nghĩa của hoa khai trương?</h3>
              <p>Mang ý nghĩa của sự thịnh vượng, khởi sắc và hy vọng cho tương lai tươi sáng. Hoa khai trương không chỉ là một loại quà tặng, mà còn là cách bày tỏ sự quan tâm và ủng hộ đối với một doanh nghiệp hoặc cá nhân đang bắt đầu một hành trình mới. </p>
              <h3 className="text-lg font-medium">Khai trương nên tặng hoa màu gì?</h3>
              <p>Bên cạnh việc lựa chọn loại hoa có ý nghĩa phù hợp thì màu sắc chủ đề của kệ hoa khai trương cũng quan trọng không kém. Trong văn hóa Á Đông, đặc biệt là Việt Nam, màu sắc rực rỡ như đỏ và vàng thường mang ý nghĩa của sự thành công, may mắn và thịnh vượng.</p>
              <p>Ngoài ra, màu xanh lá cây cũng được sử dụng phổ biến trong hoa khai trương. Màu xanh lá cây mang ý nghĩa của sự trường tồn, sự sống còn và sự phát triển bền vững. Điều này thể hiện sự quan tâm và sự hỗ trợ đến sự khởi đầu thành công của người nhận.</p>
              <p>Mỗi loại hoa, mỗi màu sắc, sẽ như những nốt nhạc riêng biệt tạo nên một bản giao hưởng cảm xúc, nói lên những lời chúc tốt đẹp nhất, và cả những điều không thể diễn tả thành lời.</p>
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

export default HoaChucMung