import CategoryIcon from './category_icon'

const Categories = () => {
  return (
    <section className="md:flex-row max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
      <div className="py-4 text-black ">
        <div className="mx-auto flex flex-col md:flex-row text-center">
          <div className="flex flex-col w-3/6 divide-y divide-red-400 mr-8 ml-80">
            <h3 className="mt-8"></h3>
            <p className="text-sm "></p>
          </div>
          <div className="flex flex-col w-2/6 items-center">
            <h3 className="text-xl md:text-xl my-4 leading-relaxed md:leading-snug sticky pt-1">
              Categories
            </h3>
          </div>
          <div className="flex flex-col w-3/6 divide-y divide-red-400 ml-8 mr-80">
            <h3 className="mt-8"></h3>
            <p className="text-sm "></p>
          </div>
        </div>
        <p className="font-sans text-sm md:text-lg mb-2 justify-center text-center ">
          Love. Shop. Discover.
        </p>
        <div className="flex flex-wrap text-center md:text-center md:px-48 lg:px-8 justify-center">
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
          <CategoryIcon color="#fc5d9d" width="50" height="50" />
        </div>
      </div>
    </section>
  )
}

export { Categories }
