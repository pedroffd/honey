import { SectionTitle } from './sectionTitle'
import { HighlightProduct } from './highlight_product'
import { productsData } from '../mockedData'
import Carousel from 'better-react-carousel'

const NewProducts = () => {
    return (
        <section className="max-w-4xl pl-4 pr-4 pt-4 pb-4 mx-auto hidden md:block">
            <SectionTitle title="New products" subtitle="" />

            <Carousel
                cols={1}
                rows={1}
                gap={8}
                loop
                //autoplay={4000}
                hideArrow={false}
            >
                {productsData.map((product, index) => (
                    <Carousel.Item key={index}>
                        <HighlightProduct
                            key={index}
                            product={product}
                            variant="default"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export { NewProducts }
