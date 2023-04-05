import Image from 'next/image'
import cardImage from '../../public/images/sextoy.jpeg'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Rating } from './rating_stars'

const ProductCard = () => {
  return (
    <div className="flex flex-wrap rounded-md w-52 dark:text-gray-100 mr-12 mt-2">
      <div className="flex items-center justify-between p-3">
        <button title="Open options" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-mainPink-100 ml-36"
          >
            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
          </svg>
        </button>
      </div>
      <Image
        alt="logo"
        src={cardImage}
        quality={100}
        width={300}
        height={300}
        className="object-cover object-center w-52 h-52 dark:bg-gray-500"
      />
      <p className="pl-3 pt-1 text-gray-800 ">
        System JO CLASSIC HYBRID, Lubricant
      </p>
      <div className="p-2">
        <div className="flex items-center">
          <div className="flex items-center pr-2 pl-1 space-x-2 dark:text-gray-800">
            Satisfyer
          </div>
          <Rating />
        </div>
        <div className="space-y-2 flex items-center pt-3 pb-1">
          <span className="text-base dark:text-gray-800 font-semibold pt-2">
            $103.00
          </span>
          <button
            type="button"
            className="mb-6 ml-20 bg-mainPink-100 rounded-full pl-3 h-12 w-12 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <MdOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProductCard }
