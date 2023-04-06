import CategoryIcon from './category_icon'
import { SectionTitle } from './sectionTitle'

const Categories = () => {
  return (
    <section className="flex-row max-w-6xl p-2 mx-auto">
      <div className="py-4 text-black">
        <SectionTitle />
        <div className="flex flex-wrap text-center md:text-center md:px-48 lg:px-1 justify-center">
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
