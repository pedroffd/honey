import { SectionTitle } from './sectionTitle'
import { ProductCard } from './product_card'

const CardContainer = () => {
    return (
        <section className="max-w-6xl pl-4 pr-4 pt-4 pb-4 mx-auto">
            <SectionTitle title="Classics" subtitle="Love. Shop. Discover." />
            <div className="flex flex-wrap justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export { CardContainer }
