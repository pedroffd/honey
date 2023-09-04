import Image from 'next/image'
import Link from 'next/link'
import { Rating } from './rating_stars'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'

import { useState } from 'react'
import { IProduct } from './product_card'
import { Button } from './button'
interface IProductsProps {
    product: IProduct
    variant?: 'default' | 'withHover' | 'withSteps'
}

const productCardVariants = cva(
    // Define your default styles here
    'flex flex-wrap rounded-md dark:text-gray-100 mt-2 justify-center min-w-[320px] my-4 w-9/12 mx-auto',
    {
        variants: {
            variant: {
                default: '', // Default styles here
                withSteps: 'shadow-[0_0_7px_0_rgba(78,78,78,0.23)] ',
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
            <div className="grid grid-cols-2 gap-6">
                {/* Row 1: Title */}
                <p className="col-span-2 pl-3 pt-6 pb-2 text-gray-800 font-semibold text-center text-xl">
                    {product.productName}
                </p>

                {/* Row 2: Product Image, Category, Rating, Price, Color */}
                <div className="col-span-1 pt-2">
                    <Image
                        alt="logo"
                        src={product.productImage}
                        quality={85}
                        width={product.imageSize}
                        height={product.imageSize}
                        className="w-8/12 h-5/12 mb-2 items-center justify-center mx-auto"
                        //style={{ objectFit: 'contain' }}
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
                        <p className="text-gray-700">{selectedColor}</p>
                    </div>
                    <div className="px-3 flex items-center space-x-2 pt-1">
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`h-6 w-6 cursor-pointer rounded-full border-2 border-beige bg-${color.code}`}
                                onClick={() => handleColorSelect(color.name)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Row 3: Description */}
            <div className="px-3 pt-2">
                {/* Description */}
                <span className="flex items-center justify-center px-24 pb-6 pt-4">
                    <p className="text-gray-700 text-center">
                        <Link href="/" className="text-mainPink-100">
                            Cuddly bird
                        </Link>{' '}
                        Toy is a clitorial stimulator that combines sound
                        stimulation and vibration, and looks like a cute night
                        light!
                    </p>
                </span>
            </div>
            {/* Row 4: Learn More Button */}
            <div className="flex justify-center pt-3 pb-6">
                {/* Learn More Button */}
                <Button variant="primary" size="xl">
                    <span>Learn More</span>
                </Button>
            </div>
        </div>
    )
}

export { HighlightProduct, type IProductsProps }
