import CategoryIcon from './category_icon'

const Cattest2 = () => {
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
          <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-24 overflow-hiddden">
            <div className="border-4 border-lightPink rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto">
              <img
                src="https://user-images.githubusercontent.com/54521023/152726300-b03e134b-ff5c-40bf-a982-e01d825b4b68.png"
                alt="user-avatar"
              />
            </div>
            <p className="text-lg mt-2 md:mt-2">
              <b>Vibrator</b>
            </p>
          </div>

          <div className="my-4 px-1 w-1/2 md:w-1/3 lg:w-24 overflow-hiddden">
            <div className="border-4 border-lightPink rounded-full transition duration-500 hover:border-white mx-auto md:mx-0 w-24 md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={80}
                height={80}
                viewBox="0 0 511.994 511.994"
                fill="#fc5d9d"
              >
                <path d="m363.248 428.312-23.326 21.105c-19.17 18.189-58.333 21.183-82.007 21.183-9.581 0-16.627-.486-18.779-.659-4.782-.373-8.348-4.556-7.975-9.329.382-4.782 4.591-8.27 9.337-7.975 26.277 2.065 71.298-.46 87.63-15.95l23.326-21.105V298.386c8.791-10.639 11.385-25.062 6.986-38.053h-24.342c-4.79 0-8.678-3.888-8.678-8.678s3.888-8.678 8.678-8.678h23.934c3.098-8.348 3.263-17.573.555-26.034H325.42c-4.79 0-8.678-3.888-8.678-8.678s3.888-8.678 8.678-8.678h32.534c3.133-8.339 3.35-17.564.686-26.034h-24.541c-4.79 0-8.678-3.888-8.678-8.678s3.888-8.678 8.678-8.678h23.595c5.354-13.538 2.959-28.898-6.37-40.066-2.3-40.326-30.642-75.438-69.294-86.467v-2.239c0-13.59-9.511-25.262-22.12-27.145-7.532-1.102-15.134 1.076-20.879 6.031-5.762 4.964-9.068 12.149-9.068 19.716v3.636c-38.895 11.116-67.193 46.41-69.25 87.04-8.938 11.116-11.195 26.338-6.049 39.493h23.231c4.79 0 8.678 3.888 8.678 8.678s-3.888 8.678-8.678 8.678h-24.081c-2.673 8.478-2.473 17.677.668 26.034h32.091c4.79 0 8.678 3.888 8.678 8.678s-3.888 8.678-8.678 8.678h-32.699c-2.716 8.478-2.543 17.677.555 26.034h23.465c4.79 0 8.678 3.888 8.678 8.678s-3.888 8.678-8.678 8.678h-23.943c-4.495 12.974-2.126 27.44 6.587 38.044v116.337l23.075 20.176c4.695 4.191 11.854 7.845 21.348 10.908a8.672 8.672 0 0 1 5.589 10.926 8.677 8.677 0 0 1-8.253 6.014 8.697 8.697 0 0 1-2.673-.425c-11.967-3.862-20.966-8.574-27.509-14.414l-22.866-19.994c-11.698 9.98-14.744 20.089-14.744 27.683 0 32.161 52.233 56.407 121.492 56.407s121.492-24.246 121.492-56.407c-.001-7.48-2.942-17.425-14.241-27.275zM212.607 130.163c-4.79 0-8.678-3.888-8.678-8.678 0-28.715 19.465-52.068 43.39-52.068 4.79 0 8.678 3.888 8.678 8.678s-3.888 8.678-8.678 8.678c-14.353 0-26.034 15.568-26.034 34.712a8.68 8.68 0 0 1-8.678 8.678z" />
              </svg>
            </div>
            <p className="text-lg mt-2 md:mt-2">
              <b>Vibrator</b>
            </p>
          </div>

          <CategoryIcon color="#fc5d9d" width="80" height="80" />
        </div>
      </div>
    </section>
  )
}

export { Cattest2 }
