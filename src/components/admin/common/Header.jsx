import PropTypes from "prop-types"


const Header = ({title}) => {
  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
				<h3 className='text-xl font-semibold text-gray-100'>{title}</h3>
        <p>Xin chào: bạn</p>
			</div>
		</header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
