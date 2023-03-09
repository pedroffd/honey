const Footer = () => (
  <div className="w-full">
    <footer className="bg-secondary-100 text-center dark:bg-secondary-600">
      <form action="">
        <div className="grid-cols-2 grid md:grid-cols-2">
          <div className="relative md:mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="w-44 pl-2.5 pt-2 pb-2 rounded-full bg-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
            >
              Email address
            </label>
          </div>

          <div className="mb-6 md:mr-auto">
            <button
              type="button"
              className="bg-mainPink-100 inline-block rounded-full ml-4 bg-primary pl-2 pr-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </footer>
  </div>
)

export { Footer }
