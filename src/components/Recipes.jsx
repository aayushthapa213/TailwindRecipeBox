import curry from "./images/curry.jpg";
import noodles from "./images/noodles.jpg";
import stew from "./images/stew.jpg";

export default function Recipes() {
  return (
    <div className="px-16">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        Latest Recipes
      </h4>
      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        {/* cards go here */}
        <div className="card hover:shadow-lg">
          <img
            src={stew}
            alt="not found"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div>
            <span className="font-bold">5 Bean Chilli Stew</span>
            <span className="block text-gray500 text-sm">Recipe By Mario</span>
          </div>
          <div className="badge">
            <svg
              className="w-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              // className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img
            src={noodles}
            alt="not found"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div>
            <span className="font-bold">Veg Noodles</span>
            <span className="block text-gray500 text-sm">Recipe By Mario</span>
          </div>
          <div className="badge">
            <svg
              className="w-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              // className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img
            src={curry}
            alt="not found"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div>
            <span className="font-bold">Tofu Curry</span>
            <span className="block text-gray500 text-sm">Recipe By Mario</span>
          </div>
          <div className="badge">
            <svg
              className="w-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              // className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>25 mins</span>
          </div>
        </div>
      </div>

      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        Popular Recipes
      </h4>
      <div className="mt-8">{/* cards go here */}</div>

      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
          Load More
        </div>
      </div>
    </div>
  );
}
