import { SectionTitle } from './sectionTitle'
import { ProductCard } from './product_card'
import { productsData } from '../mockedData'

const CardContainer = () => {
    return (
        <section className="max-w-6xl pl-4 pr-4 pt-4 pb-4 mx-auto">
            <SectionTitle
                title="Customer favs"
                subtitle="The most beautiful things we know"
            />
            <div className="flex flex-wrap justify-center">
                {productsData.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        variant="withSteps"
                    />
                ))}
            </div>
        </section>
    )
}

export { CardContainer }
