import CategoryIcon from './category_icon'
import { SectionTitle } from './sectionTitle'

const Categories = () => {
  return (
    <section className="md:flex-row max-w-screen-xl pl-8 pr-8 pt-4 pb-4 mx-auto">
      <div className="py-4 text-black ">
        <SectionTitle />
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
