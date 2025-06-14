// import { FaqComp } from "./faqs/faq_comp"
import { Testimonal } from "./testimonial/testimonal"
import { Location } from "./Locations/location"
import { Hero_2 } from "./Locations/hero-2"
import { Nav } from "../Navbar/nav"
import { Accordian } from "./faqs/accordian"


export const Homepage = () => {

    return (
        <div>
          {/* Section 1 */}
          <section className="w-[90vw] mx-auto my-6 flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 px-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-700">
                Your One-Stop Stationery Shop
              </h1>
              <p className="text-base md:text-lg mt-3 text-zinc-500 leading-6">
                Explore our wide range of stationery products, from pens and notebooks to snacks and drinks. Enjoy convenient home delivery right to your doorstep!
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full sm:w-[70%] border-2 border-zinc-500 text-base font-medium text-zinc-600 px-3 py-2 outline-none rounded-sm"
                />
                <button className="bg-blue-600 text-white px-6 py-2 text-base font-semibold rounded hover:bg-blue-700 transition active:scale-95">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="/images/home1.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg transition duration-100 hover:scale-105"
              />
            </div>
          </section>
      
          {/* Section 2 */}
          <section className="w-[90vw] mx-auto my-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="/images/h2.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg transition duration-100 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-700">
                Wide Range of Stationery Products
              </h1>
              <p className="text-base md:text-lg mt-3 text-zinc-500 leading-6">
                At Mk Stationary, we offer an extensive selection of stationery products to meet all your needs. From high-quality pencils and pens to a variety of notebooks and binders...
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 text-base font-semibold rounded hover:bg-blue-700 transition active:scale-95">
                Shop your Collection
              </button>
            </div>
          </section>
      
          {/* Section 3 */}
          <section className="w-[90vw] mx-auto my-6 flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 px-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-700">
                Convenient Home Delivery Service
              </h1>
              <p className="text-base md:text-lg mt-3 text-zinc-500 leading-6">
                Experience unparalleled convenience with our newly launched home delivery service at Mk Stationary. You can now order your favorite stationery items from the comfort of your home...
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 text-base font-semibold rounded hover:bg-blue-700 transition active:scale-95">
                Order now
              </button>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="/images/h3.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg transition duration-100 hover:scale-105"
              />
            </div>
          </section>
      
          {/* Section 4 */}
          <section className="w-[90vw] mx-auto my-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="/images/h4.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg transition duration-100 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-700">
                Custom Gift Packing Services
              </h1>
              <p className="text-base md:text-lg mt-3 text-zinc-500 leading-6">
                Make any occasion special with our custom gift packing services available at Mk Stationary. Whether it is a birthday present or a thoughtful gesture...
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 text-base font-semibold rounded hover:bg-blue-700 transition active:scale-95">
                Explore Gift Options
              </button>
            </div>
          </section>
      
          {/* Additional Components */}
          <Testimonal />
          <Accordian />
          <Location />
          <Hero_2 />
        </div>
      );
      
}