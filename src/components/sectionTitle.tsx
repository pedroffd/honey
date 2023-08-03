// Interface for prop types
interface SectionTitleProps {
    title: string
    subtitle: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <section className="max-w-6xl pl-4 pr-4 pt-4 pb-4 mx-auto">
            <div className="mx-auto flex flex-col md:flex-row justify-center">
                <div className="border-t-2 border-red-400 w-1/4 my-3"></div>
                <h3 className="flex text-xl md:text-xl mx-5 leading-relaxed md:leading-snug">
                    {title}
                </h3>
                <div className="border-t-2 border-red-400 w-1/4 my-3"></div>
            </div>
            <p className="font-sans text-sm md:text-lg text-center">
                {subtitle}
            </p>
        </section>
    )
}

export { SectionTitle }
