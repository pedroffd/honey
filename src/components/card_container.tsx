import { SectionTitle } from './sectionTitle'
import { ProductCard } from './product_card'

const CardContainer = () => {
  return (
    <section className="md:flex-row pl-8 pr-8 pt-4 pb-4 mx-auto">
      <SectionTitle />
      <div className="flex flex-wrap md:px-48 lg:px-8 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export { CardContainer }
