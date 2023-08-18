import Image, { StaticImageData } from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Rating } from './rating_stars'
import { cn } from '../lib/utils'
import { cva } from 'class-variance-authority'
import { HeartIcon } from '../assets/icons/icon-list' // Import the specific icon you want to use

export interface IProduct {
    imageSize: number
    produtName: string
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
                    'shadow-[0_0_7px_0_rgba(78,78,78,0.23)] min-w-[180px] md:w-[150px] lg:w-[210px] xl:w-[250px]',
                withHover:
                    'border-solid border-2 border-slate-100 bg-slate-50 hover:bg-slate-100', // Variant styles here
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

const ProductCard: React.FC<IProductsProps> = ({
    product,
    variant = 'default',
}) => {
    return (
        <div className={cn(productCardVariants({ variant }))}>
            <div className="flex items-center justify-between relative">
                <button title="Open options" type="button">
                    <div className="w-8 h-8 p-1 absolute top-0 left-44 text-mainPink-100">
                        <HeartIcon />
                    </div>
                </button>
            </div>
            <Image
                alt="logo"
                src={product.productImage}
                quality={100}
                width={product.imageSize}
                height={product.imageSize}
                className="object-cover object-center w-52 h-52 dark:bg-gray-500 mt-2"
            />
            <p className="pl-3 pt-1 text-gray-800">
                {product.produtName}, {product.productCategory}
            </p>
            <div className="py-2">
                <div className="flex items-center space-x-4">
                    <p className="pr-2 pl-1 dark:text-gray-800">Satisfyer</p>
                    <Rating />
                </div>
                <div className="space-y-2 flex items-center pt-3 pb-1">
                    <span className="text-base dark:text-gray-800 font-semibold pt-2">
                        ${product.price}
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

export { ProductCard, type IProductsProps }
