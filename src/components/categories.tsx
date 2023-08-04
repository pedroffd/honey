import CategoryIcon from './category_icon'
import { SectionTitle } from './sectionTitle'
import { categoriesData } from '../mockedData'
export interface ICategory {
    width: number
    height: number
    iconName: string
    color: string
    svg: string
}

interface ICategoriesProps {
    categories: ICategory[]
}

const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
    console.log('categoriesData: ', categoriesData)
    return (
        <section className="flex-row max-w-6xl p-2 mx-auto">
            <div className="py-4 text-black">
                <SectionTitle
                    title="Categories"
                    subtitle="Love. Shop. Discover."
                />
                <div className="flex flex-wrap text-center md:text-center md:px-48 lg:px-1 justify-center">
                    {categoriesData.map((category, index) => (
                        <CategoryIcon
                            key={index}
                            color={category.color}
                            width={category.width.toString()}
                            height={category.height.toString()}
                            iconName={category.iconName}
                            svg={category.svg} // Pass the SVG as a prop
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Categories }
