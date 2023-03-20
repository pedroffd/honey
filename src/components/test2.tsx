import CategoryIcon from './category_icon'

const Categories = () => {
  return (
    <section className="md:flex-row max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
      <div className="py-4 text-black">
        <div className="mx-auto flex flex-col md:flex-row text-center">
          <div className="flex flex-col w-full ">
            <h3 className="text-xl md:text-xl my-4 leading-relaxed md:leading-snug">
              Categories
            </h3>
            <div className="font-sans text-sm md:text-lg mb-2">
              <p>Love. Shop. Discover.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap text-center md:text-center px-8 md:px-4 lg:px-8">
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
          <CategoryIcon color="#fc5d9d" width="80" height="80" />
        </div>
      </div>
    </section>
  )
}

export { Categories }
