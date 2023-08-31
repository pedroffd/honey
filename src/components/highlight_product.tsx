import Image from 'next/image'

import { Rating } from './rating_stars'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'

import { useState } from 'react'
import { IProduct } from './product_card'

interface IProductsProps {
    product: IProduct
    variant?: 'default' | 'withHover' | 'withSteps'
}

const productCardVariants = cva(
    // Define your default styles here
    'flex flex-wrap rounded-md  dark:text-gray-100 mr-6 ml-8 mt-2 justify-center min-w-[380px] max-h-80 my-4',
    {
        variants: {
            variant: {
                default: '', // Default styles here
                withSteps: 'shadow-[0_0_7px_0_rgba(78,78,78,0.23)]  ',
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
            <div className="grid grid-cols-2 gap-6 pt-2">
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
                        className="object-cover object-center w-full h-full dark:bg-gray-500 mt-2 ml-4"
                    />
                </div>
                <div className="col-span-1 mx-2">
                    <p className="px-3 pt-1 text-gray-600 text-sm mb-1">
                        {product.productCategory}
                    </p>
                    <div className="flex items-center space-x-2 mb-1">
                        <Rating />
                    </div>
                    <p className="px-3 text-gray-800">${product.price} USD</p>
                    <div className="px-3 flex items-center space-x-2 pt-2 mt-4">
                        <p className="text-gray-800 font-semibold text-sm">
                            Color:
                        </p>
                        <p>{selectedColor}</p>
                    </div>
                    <div className="px-3 flex items-center space-x-2 pt-1">
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`h-6 w-6 rounded-full border-2 border-beige bg-${color}`}
                            ></div>
                        ))}
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
