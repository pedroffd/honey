export interface ICategoryCard {
    color?: string
    width?: number
    height?: number
    iconName?: string
    svg: string // Add the svg prop
}
interface ICategoriesProps {
    category: ICategoryCard
}
const CategoryCard: React.FC<ICategoriesProps> = ({ category }) => {
    const { color, width, height, iconName, svg } = category
    return (
        <div className="lg:my-4 w-1/2 md:w-1/3 lg:w-24 overflow-hiddden mr-8 ml-8 pb-2">
            <div className="h-20 w-20 border-4 bg-blu border-lightPink rounded-full transition duration-500 hover:border-white mx-auto pl-3 pt-2">
                <div className="w-12 h-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={color}
                        viewBox="0 0 511.994 511.994"
                    >
                        <path d={svg} />
                    </svg>
                </div>
            </div>
            <p className="text-lg mt-2 md:mt-2">
                <b>{iconName}</b>
            </p>
        </div>
    )
}

export default CategoryCard