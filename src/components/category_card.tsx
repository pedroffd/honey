export interface ICategoryCard {
    color?: string
    width?: number
    height?: number
    iconName?: string
    svg: React.FC<React.SVGProps<SVGSVGElement>> // Change the type to React component type
}

interface ICategoriesProps {
    category: ICategoryCard
}
const CategoryCard: React.FC<ICategoriesProps> = ({ category }) => {
    const { color, width, height, iconName, svg: SvgComponent } = category
    return (
        <div className="lg:my-4 w-1/2 md:w-1/3 lg:w-24 overflow-hiddden mr-8 ml-8 pb-2">
            <div className="h-20 w-20  rounded-full transition duration-500 hover:border-white mx-auto pl-3 pt-2 bg-beige">
                <div className="w-12 h-12">
                    <SvgComponent fill={color} width={width} height={height} />
                </div>
            </div>
            <p className="text-base mt-2 md:mt-2">{iconName}</p>
        </div>
    )
}

export default CategoryCard
