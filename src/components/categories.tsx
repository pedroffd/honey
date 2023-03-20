import CategoryIcon from './category_icon'
import { Logo } from './logo'
const Categories = () => {
  return (
    <section className="md:flex-row max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
      <div className="py-4 text-black">
        <div className="flex flex-col text-center ">
          <div className="text-base md:text-2xl text-black my-2 leading-relaxed md:leading-snug">
            Categories
          </div>
          <div className="font-sans text-sm md:text-lg mb-2">
            Love. Shop. Discover.
          </div>
        </div>
        <div className="flex flex-wrap text-center md:text-left px-8 md:px-4 lg:px-8">
          <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-1/12 overflow-hiddden">
            <div className="border-4 border-lightPink rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto">
              <CategoryIcon color="#fc5d9d" width="55" height="55" />
            </div>
            <p className="text-sm text-center mt-1 md:mt-1">User Name </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Categories }
