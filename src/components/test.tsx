const HeroWeb: React.FC<HeroProps> = ({ highlightProducts }) => {
    return (
        <div className="w-full" id="Hero">
            <div className="max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap- lg:grid-rows-2 md:h-96">
                    <div className="bg-heroMain h-48 relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer md:col-span-2 lg:row-span-2  group dark:bg-gray-500">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                            >
                                Art
                            </a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">
                                    31
                                </span>
                                <span className="leading-none uppercase">
                                    Jul
                                </span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100"
                            >
                                Fuga ea ullam earum assumenda, beatae labore
                                eligendi.
                            </a>
                        </h2>
                    </div>

                    <div className="bg-heroSecond h-48 relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer group dark:bg-gray-500">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                            >
                                Sports
                            </a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">
                                    19
                                </span>
                                <span className="leading-none uppercase">
                                    Jul
                                </span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="font-medium text-md group-hover:underline dark:text-gray-100"
                            >
                                Doloribus sit illo necessitatibus architecto
                                exercitationem enim
                            </a>
                        </h2>
                    </div>

                    <div className="bg-lightPink h-48 relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer group dark:bg-gray-500">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-lightPink dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline dark:text-gray-100 dark:bg-violet-400"
                            >
                                Politics
                            </a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">
                                    04
                                </span>
                                <span className="leading-none uppercase">
                                    Aug
                                </span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="font-medium text-md group-hover:underline dark:text-gray-100"
                            >
                                {' '}
                                Autem sunt tempora mollitia magnam non
                                voluptates
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Hero }
