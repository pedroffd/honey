import Image, { StaticImageData } from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Rating } from './rating_stars'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'
import { HeartIcon } from '../assets/icons/icon-list' // Import the specific icon you want to use
import { useState } from 'react'

export interface IProduct {
    imageSize: number
    productName: string
    productCategory: string
    price: number
    productImage: string | StaticImageData
}

interface IProductsProps {
    product: IProduct
    variant?: 'default' | 'withHover' | 'withSteps'
}

const productCardVariants = cva(
    // Define your default styles here
    'flex flex-wrap rounded-md w-56 dark:text-gray-100 mr-6 ml-8 mt-2 justify-center',
    {
        variants: {
            variant: {
                default: '', // Default styles here
                withSteps:
                    'shadow-[0_0_7px_0_rgba(78,78,78,0.23)] min-w-[340px]  lg:w-[210px] xl:w-[250px]',
                withHover:
                    'border-solid border-2 border-slate-100 bg-slate-50 hover:bg-slate-100', // Variant styles here
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

const HighlightProduct: React.FC<IProductsProps> = ({
    product,
    variant = 'default',
}) => {
    const [selectedColor, setSelectedColor] = useState('') // State to store the selected color

    const handleColorSelect = (color) => {
        setSelectedColor(color)
    }
    return (
        <div className={cn(productCardVariants({ variant }))}>
            <div className="flex items-center justify-between relative">
                {/* ... */}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Row 1: Title */}
                <p className="col-span-2 pl-3 pt-1 text-gray-800 font-semibold">
                    {product.productName}
                </p>

                {/* Row 2: Product Image, Category, Rating, Price, Color */}
                <div className="col-span-1">
                    <Image
                        alt="logo"
                        src={product.productImage}
                        quality={100}
                        width={product.imageSize}
                        height={product.imageSize}
                        className="object-cover object-center w-full h-full dark:bg-gray-500 mt-2"
                    />
                </div>
                <div className="col-span-1">
                    <p className="px-3 pt-1 text-gray-800">
                        {product.productCategory}
                    </p>
                    <div className="px-3 flex items-center space-x-4">
                        <Rating />
                    </div>
                    <p className="px-3 text-gray-800">${product.price}</p>
                    <div className="px-3 flex items-center space-x-2 pt-2">
                        <p className="text-gray-800 font-semibold">Color:</p>
                        <p>{selectedColor}</p>
                    </div>
                    <div className="px-3 flex items-center space-x-2 pt-1">
                        {/* Map over colors and render color circles */}
                    </div>
                </div>
            </div>
            {/* Row 3: Description */}
            <div className="px-3 pt-2">{/* Description */}</div>
            {/* Row 4: Learn More Button */}
            <div className="flex justify-center py-3">
                {/* Learn More Button */}
            </div>
        </div>
    )
}

export { HighlightProduct, type IProductsProps }
