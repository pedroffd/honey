import CategoryCard from './category_card'
import { SectionTitle } from './sectionTitle'
import { categoriesData } from '../mockedData'

const Categories = () => {
    return (
        <section className="flex-row max-w-6xl p-2 mx-auto">
            <div className="py-4 text-black">
                <SectionTitle
                    title="Categories"
                    subtitle="Love. Shop. Discover."
                />
                <div className="flex flex-wrap text-center md:text-center md:px-48 lg:px-1 justify-center">
                    {categoriesData.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Categories }
