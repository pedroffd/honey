import { SectionTitle } from './sectionTitle'
import { ProductCard } from './product_card'
import { productsData } from '../mockedData'

const CardContainer = () => {
    return (
        <section className="max-w-6xl pl-4 pr-4 pt-4 pb-4 mx-auto">
            <SectionTitle title="Classics" subtitle="Love. Shop. Discover." />
            <div className="flex flex-wrap justify-center">
                {productsData.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}

export { CardContainer }
