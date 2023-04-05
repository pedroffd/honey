const SectionTitle = () => {
  return (
    <div>
      <div className="mx-auto flex flex-col md:flex-row text-center">
        <div className="flex flex-col w-3/6 divide-y divide-green-400 mr-4 ml-72">
          <h3 className="mt-8"></h3>
          <p className=""></p>
        </div>
        <div className="flex flex-col w-2/6 items-center">
          <h3 className="text-xl md:text-xl my-4 leading-relaxed md:leading-snug pt-1">
            Categories
          </h3>
        </div>
        <div className="flex flex-col w-3/6 divide-y divide-blue-400 ml-4 mr-80">
          <h3 className="mt-8"></h3>
          <p className=""></p>
        </div>
      </div>
      <p className="font-sans text-sm md:text-lg mb-2 text-center">
        Love. Shop. Discover.
      </p>
    </div>
  )
}

export { SectionTitle }
