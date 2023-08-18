import Carousel from 'better-react-carousel'
import { useIsMobile } from '../hooks/hooks'
import { highlightProducts } from '../mockedData'

export interface IHighlightProduct {
    topic: string
    date: string
    title: string
    href: string
    bg: string
}
interface HeroProps {
    highlightProducts: IHighlightProduct[]
}

const HeroMobile: React.FC<HeroProps> = ({ highlightProducts }) => {
    return (
        <div className="w-full" id="Hero">
            <div className="max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
                <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 md:gap-2 lg:grid-rows-2 ">
                    <Carousel
                        cols={3}
                        rows={1}
                        gap={12}
                        loop
                        autoplay={4000}
                        hideArrow={true}
                    >
                        {highlightProducts.map((product, index) => (
                            <Carousel.Item key={index}>
                                <div
                                    className={
                                        'h-48 relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer md:col-span-2 lg:row-span-2 group'
                                    }
                                >
                                    <div
                                        className={`absolute top-0 bottom-0 left-0 right-0 dark:via-transparent bg-${product.bg}`}
                                    ></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                                        >
                                            {product.topic}
                                        </a>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                            <span className="text-3xl font-semibold leading-none tracking-wide">
                                                {product.date.split(' ')[0]}
                                            </span>
                                            <span className="leading-none uppercase">
                                                {product.date.split(' ')[1]}
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <a
                                            rel="noopener noreferrer"
                                            href={product.href}
                                            className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
                                        >
                                            {product.title}
                                        </a>
                                    </h2>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

const HeroWeb: React.FC<HeroProps> = ({ highlightProducts }) => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap- lg:grid-rows-2 h-96">
                    {highlightProducts.map((product, index) => (
                        <div
                            key={index}
                            className={`relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer group ${
                                index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
                            }`}
                        >
                            <div
                                className={`absolute top-0 bottom-0 left-0 right-0 dark:via-transparent bg-${product.bg}`}
                            ></div>

                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                                >
                                    {product.topic}
                                </a>
                                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                    <span className="text-3xl font-semibold leading-none tracking-wide">
                                        {product.date.split(' ')[0]}
                                    </span>
                                    <span className="leading-none uppercase">
                                        {product.date.split(' ')[1]}
                                    </span>
                                </div>
                            </div>
                            <h2 className="z-10 p-5">
                                <a
                                    rel="noopener noreferrer"
                                    href={product.href}
                                    className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
                                >
                                    {product.title}
                                </a>
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { HeroWeb }

const Hero = () => {
    const isMobile = useIsMobile()
    return isMobile ? (
        <HeroMobile highlightProducts={highlightProducts} />
    ) : (
        <HeroWeb highlightProducts={highlightProducts} />
    )
}

export { Hero }
