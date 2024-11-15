import { useState } from "react"
import { Link } from "react-router-dom"
import NavBar2 from "../components/NavBar2"
import ProductItem from "../components/ProductItem"
import { HoaChiaBuonProducts } from "../utils/mockData"

const HoaChiaBuon = () => {
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
            <span className="text-green-600">Hoa chia buồn</span>
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
              {HoaChiaBuonProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="my-11 border border-gray-300 rounded-md">
          <div className="p-7 space-y-4">
            <div className={`space-y-4 ${!showMore ? 'line-clamp-2' : ''}`}>
              <p>
                Trải qua thời khắc đau buồn và tiếc thương khi phải đối mặt với sự ra đi hoặc khi nghe tin về một người quen thân vừa qua đời, đó luôn là một khoảnh khắc đau lòng và là điều mà không ai mong muốn phải trải qua trong đời. Trong thời điểm đau buồn ấy, vòng hoa chia buồn là cách để chúng ta gửi đi những lời chia sẻ từ trái tim. Vòng hoa trở thành một biểu tượng của kính trọng, lời tri ân và tình cảm chân thành. Từng bông hoa, mỗi cành lá đều mang theo những ý nghĩa sâu sắc, chứa đựng những thông điệp không thể nói thành lời, thể hiện những nỗi niềm tiếc thương của người ở lại.
              </p>
              <h3 className="text-lg font-medium">Hoa tang là gì?</h3>
              <p>
                Hoa tang, hay còn gọi là hoa chia buồn, là hoa được dùng để viếng tặng trong lễ tang như một cách để thể hiện sự tôn kính và tiếc thương dành cho người đã mất.
                Hoa tang thường là các loại hoa như hoa Lan, hoa Hồng, hoa Cúc hoặc hoa Lily. Tùy vào ý nghĩa, niềm tin hay tín ngưỡng khác nhau mà hoa sẽ được lựa chọn kỹ lưỡng về màu sắc, hình dáng, chủng loại để cắm trên kệ hoặc theo hình vòng tròn nhằm mang ý nghĩa đặc biệt.
              </p>
              <h3 className="text-lg font-medium">Nguồn gốc của hoa tang?</h3>
              <p>
                Hoa tang có nguồn gốc từ thời xa xưa, khi mà hoa không chỉ được dùng để trang trí mà còn được sử dụng như một cách để truyền đạt cảm xúc. Những bông hoa biểu lộ sự kính trọng đối với người đã ra đi. Hoa tang được xem là một cách để tưởng nhớ, vinh danh người quá cố và chia sẻ nỗi buồn với những người thân còn lại của họ.
              </p>
              <h3 className="text-lg font-medium">Vì sao Vòng Hoa Tang có hình tròn?</h3>
              <div className="border-l-4 border-gray-500 pl-4">
                <p className="">Tự do muôn đời tôi vẫn tự do. Tử sinh chỉ là cửa ngõ ra vào, tử sinh là trò chơi cút bắt. Tôi chưa bao giờ từng sinh cũng chưa bao giờ từng diệt - Thiền sư Thích Nhất Hạnh</p>
              </div>
              <p>
                Giống như Thiền sư Thích Nhất Hạnh đã nói, chúng ta không sinh ra và cũng sẽ không mất đi, sinh và diệt luôn có mặt đồng thời với nhau giống như một hình tròn không có điểm bắt đầu hoặc kết thúc. Khi một người mất đi cũng chính là lúc họ được sinh ra.
              </p>
              <p>Vòng tròn của hoa tang tượng trưng cho chu trình vô tận và sự liên kết vô hạn của sự sống. Là thông điệp để giúp những người thân còn lại nhận ra rằng mặc dù mất mát là một phần tự nhiên nhưng người vừa nằm xuống vẫn sẽ luôn tồn tại mãi, cũng giống như tình yêu thương vô tận dành cho họ. </p>
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

export default HoaChiaBuon