// Interface for prop types
interface SectionTitleProps {
    title: string
    subtitle: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <section className="max-w-6xl pl-4 pr-4 pt-4 pb-4 mx-auto">
            <div className="mx-auto flex flex-col md:flex-row text-center">
                <div className="flex flex-col w-3/6 divide-y divide-red-400 mr-4 ml-72 ">
                    <h3 className="mt-8"></h3>
                    <p className=""></p>
                </div>
                <div className="flex flex-col w-2/6 items-center">
                    <h3 className="text-xl md:text-xl my-4 leading-relaxed md:leading-snug pt-1">
                        {title}
                    </h3>
                </div>
                <div className="flex flex-col w-3/6 divide-y divide-red-400 mr-72 ml-4">
                    <h3 className="mt-8"></h3>
                    <p className=""></p>
                </div>
            </div>
            <p className="font-sans text-sm md:text-lg text-center">
                {subtitle}
            </p>
        </section>
    )
}

export { SectionTitle }
