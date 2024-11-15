import { useState } from "react"
import { Link } from "react-router-dom"
import NavBar2 from "../components/NavBar2"
import ProductItem from "../components/ProductItem"
import { HoaChauProducts } from "../utils/mockData"

const HoaChau = () => {
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
            <span className="text-green-600">Hoa chậu thiết kế</span>
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
              {HoaChauProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="my-11 border border-gray-300 rounded-md">
          <div className="p-7 space-y-4">
            <div className={`space-y-4 ${!showMore ? 'line-clamp-2' : ''}`}>
              <p>
                Hoa chậu thiết kế là sự kết hợp hoàn hảo giữa nghệ thuật cắm hoa và sự sáng tạo trong cách trình bày. Những chậu hoa được lựa chọn kỹ lưỡng với các loại hoa tươi đẹp, thường được thiết kế theo những phong cách riêng biệt, từ đơn giản, tinh tế cho đến cầu kỳ, sang trọng. Hoa chậu thiết kế không chỉ là một món quà đẹp mà còn là một cách để thể hiện tình cảm, sự quan tâm và gửi gắm những thông điệp yêu thương, chúc phúc đến người nhận. Mỗi chậu hoa là một tác phẩm nghệ thuật, mang đến sự tươi mới và sức sống cho không gian sống.
              </p>
              <h3 className="text-lg font-medium">Hoa chậu thiết kế là gì?</h3>
              <p>
                Hoa chậu thiết kế là những chậu hoa được trang trí một cách nghệ thuật và cẩn thận, tạo thành những tác phẩm có tính thẩm mỹ cao. Những chậu hoa này có thể được sử dụng để trang trí nội thất, làm quà tặng trong các dịp lễ tết, sinh nhật, hoặc đơn giản là để làm đẹp không gian sống. Hoa chậu thiết kế thường bao gồm sự kết hợp giữa các loại hoa tươi, cây xanh và phụ kiện trang trí như đá, rêu, hoặc các vật liệu tự nhiên khác.
              </p>
              <h3 className="text-lg font-medium">Nguồn gốc của hoa chậu thiết kế?</h3>
              <p>
                Hoa chậu thiết kế có nguồn gốc từ nhu cầu tạo ra những món quà độc đáo và sáng tạo. Ban đầu, hoa được sử dụng chủ yếu để trang trí trong nhà, nhưng theo thời gian, nghệ thuật thiết kế hoa đã phát triển và trở thành một phần không thể thiếu trong các sự kiện, lễ hội, và cả trong trang trí không gian sống hàng ngày. Các chậu hoa thiết kế không chỉ là biểu tượng của sự tươi mới mà còn thể hiện sự tinh tế và phong cách sống của người sở hữu.
              </p>
              <h3 className="text-lg font-medium">Vì sao hoa chậu thiết kế lại được ưa chuộng?</h3>
              <div className="border-l-4 border-gray-500 pl-4">
                <p>Hoa không chỉ là vẻ đẹp thoáng qua, mà là biểu tượng của sự sống mãi mãi. - Câu nói của một nghệ nhân hoa nổi tiếng.</p>
              </div>
              <p>
                Hoa chậu thiết kế không chỉ đẹp về hình thức mà còn mang trong mình những ý nghĩa sâu sắc. Chính vì vậy, chúng đã trở thành món quà ý nghĩa trong nhiều dịp quan trọng. Một chậu hoa thiết kế có thể là món quà thể hiện sự biết ơn, tình yêu hay những lời chúc tốt đẹp. Bên cạnh đó, hoa chậu thiết kế còn giúp không gian sống trở nên sinh động và hài hòa hơn. Với sự sáng tạo không ngừng, những nghệ nhân cắm hoa luôn biết cách biến hóa những chậu hoa đơn giản thành những tác phẩm nghệ thuật độc đáo, làm cho người nhận cảm thấy đặc biệt và trân trọng.
              </p>
              <p>
                Chậu hoa không chỉ là vật trang trí, mà là món quà tinh tế mang theo thông điệp yêu thương, sự quan tâm chân thành và lời chúc phúc tốt đẹp cho người nhận. Cùng với sự phát triển của nghệ thuật cắm hoa, hoa chậu thiết kế ngày càng trở thành sự lựa chọn phổ biến trong việc tạo dựng không gian sống đẹp mắt và đầy cảm hứng.
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

export default HoaChau