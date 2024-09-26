// import Image from "next/image";

import { testimonials } from "@/components/data";
import FirstFeature from "@/components/FirstFeature";
import FourthFeature from "@/components/FourthFeature";
import { HeroSection } from "@/components/HeroSection";
import SecondFeature from "@/components/SecondFeature";
import ThirdFeature from "@/components/ThirdFeature";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  p-10  w-screen flex  bg-background text-foreground flex-col  ">

      <HeroSection />

      <div className="flex flex-col" >

        <div className="w-full items-center  mb-8  flex justify-center " >
          <h1 className="  text-2xl lg:text-4xl font-semibold" >

            Old things really have passed away...😉
          </h1>

        </div>

        <FirstFeature />
        <SecondFeature />
        <ThirdFeature />
        <FourthFeature />

      </div>


      <section className="flex flex-wrap w-full justify-center mt-20 pb-8 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-4/5 sm:w-72 md:w-64 h-72 bg-primary text-primary-foreground rounded-lg p-6 flex flex-col items-center justify-between"
          >
            {/* Image (Replace with actual image path and alt text) */}
            <div className="h-16 w-16 rounded-full bg-muted mb-4">
              <Image
                src=""
                alt={`${testimonial.author} avatar`}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* Testimonial content */}
            <p className="text-center text-sm sm:text-base"> &quot;{testimonial.content}&quot; </p>

            {/* Author */}
            <p className="text-sm sm:text-base mt-4">- {testimonial.author}</p>
          </div>
        ))}
      </section>


      <section>
        <div className="flex items-center justify-center mt-20 py-4 lg:py-10 ">
          <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <h2 className="text-2xl font-bold">300+</h2>
              <div className="flex items-center space-x-2">
                <p>Disciples onboarded</p>
                <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <h2 className="text-2xl font-bold">15+</h2>
              <div className="flex items-center space-x-2">
                <p>Unit groups</p>
                <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <h2 className="text-2xl font-bold">4+</h2>
              <div className="flex items-center space-x-2">
                <p>Congregations</p>
                <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <h2 className="text-2xl font-bold">2</h2>
              <div className="flex items-center space-x-2">
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>



        <div className="flex items-center mt-20 justify-center w-full" >
          <div className="flex lg:w-9/12 w-4/5 flex-col gap-4 border-y-border items-center justify-center text-center border-y-2  py-4 lg:py-10 " >

            <h2 className="font-bold text-lg " >Morover it is required in stewards that a man be found faithful</h2>
            <p>- 1 Corinthians 4:2 (KJV)</p>


          </div>
        </div>

      </section>

    </div>
  );
}
