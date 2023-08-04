interface ICategoryIconProps {
    color?: string
    width?: string
    height?: string
    iconName?: string
    svg: string // Add the svg prop
}

const CategoryIcon: React.FC<ICategoryIconProps> = ({
    color,
    width,
    height,
    iconName,
    svg, // Get the svg prop from props
}) => {
    return (
        <div className="lg:my-4 w-1/2 md:w-1/3 lg:w-24 overflow-hiddden mr-8 ml-8">
            <div className="h-20 w-20 border-4 border-lightPink rounded-full transition duration-500 hover:border-white mx-auto pl-3 pt-2">
                {/* Render the SVG using dangerouslySetInnerHTML */}
                <div dangerouslySetInnerHTML={{ __html: svg }} />
            </div>
            <p className="text-lg mt-2 md:mt-2">
                <b>{iconName}</b>
            </p>
        </div>
    )
}

CategoryIcon.defaultProps = {
    color: '#fc5d9d',
    width: '80',
    height: '80',
}

export default CategoryIcon
