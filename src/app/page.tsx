// import Image from "next/image";

import { testimonials } from "@/components/data";
import FirstFeature from "@/components/FirstFeature";
import FourthFeature from "@/components/FourthFeature";
import { HeroSection } from "@/components/HeroSection";
import SecondFeature from "@/components/SecondFeature";
import ThirdFeature from "@/components/ThirdFeature";
import Image from "next/image";
import google from "@/components/images/getOnPlaystore.png"
import appStore from "@/components/images/appstore.svg"
import preview from "@/components/images/preview.png"




export default function Home() {
  return (
    <div className="  p-10  w-screen flex  bg-background text-foreground flex-col  ">
      <div className="max-w-5xl mx-auto w-full">


        <HeroSection />

        <div className="flex flex-col" >

          <div className="w-full items-center  mb-8  flex justify-center " >
            <h1 className="  text-2xl lg:text-4xl font-semibold" >

              Old things really have passed away...😉
            </h1>

          </div>

          <div>
            <FirstFeature />
          </div>

          <SecondFeature />
          <ThirdFeature />
          <FourthFeature />

        </div>

        <section className="h-full mt-20">
         
          <h1 className="  text-2xl lg:text-4xl font-semibold" >

            Hear from other Christian Leaders...
          </h1>
          <div className="flex flex-wrap md:justify-center w-full lg:justify-between gap-6 mt-10 md:px-8 pb-8 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-72  md:w-64 lg:h-80 h-72 bg-primary text-primary-foreground rounded-lg p-6 flex flex-col items-center justify-between"
              >
                {/* Image (Replace with actual image path and alt text) */}
                <div className="h-16 w-16 rounded-full bg-muted mb-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author} avatar`}
                    width={64}
                    height={64}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* Testimonial content */}
                <p className="text-center text-sm lg:text-lg sm:text-base"> &quot;{testimonial.content}&quot; </p>

                {/* Author */}
                <p className="text-sm sm:text-base  font-bold mt-4">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>


        <section>
          <div className="flex items-center justify-center mt-4 py-4 lg:py-10 ">
            <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                <h2 className="text-2xl font-bold">300+</h2>
                <div className="flex lg:text-xl items-center space-x-2">
                  <p>Disciples onboarded</p>
                  <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                <h2 className="text-2xl font-bold">15+</h2>
                <div className="flex items-center lg:text-xl space-x-2">
                  <p>Unit groups</p>
                  <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                <h2 className="text-2xl font-bold">4+</h2>
                <div className="flex items-center lg:text-xl space-x-2">
                  <p>Congregations</p>
                  <div className="lg:border-l-2 h-4 lg:border-gray-300"></div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                <h2 className="text-2xl font-bold">2</h2>
                <div className="flex items-center lg:text-xl space-x-2">
                  <p>Countries</p>
                </div>
              </div>
            </div>
          </div>



          <div className="flex items-center mt-20 justify-center w-full" >
            <div className="flex lg:w-9/12 w-4/5 flex-col gap-4 border-y-border items-center justify-center text-center border-y-2  py-4 lg:py-10 " >
              <h2 className="font-bold text-lg lg:text-2xl " >Moreover it is required in stewards that a man be found faithful</h2>
              <p className=" italic " >  - 1 Corinthians 4:2 (KJV)</p>


            </div>
          </div>

        </section>


        <div className="w-full  flex items-center justify-center mt-10 "  >



          <div className="w-full flex flex-col lg:flex-row relative overflow-hidden lg:h-96 h-[27rem]  bg-primary rounded-3xl max-w-5xl   ">



            <div className=" w-full lg:w-3/5 lg:p-8 lg:pt-20 p-4 md:p-6 " >
              <h1 className="text-primary-foreground lg:leading-snug  lg:text-4xl md:text-4xl font-extrabold w-4/5  text-2xl  " >
                Get started with your fellowship journey
              </h1>

              <p className="text-primary-foreground mt-4 leading-tight text-sm lg:text-lg md:text-base  " >
                Discover the latest Fellowship innovation
              </p>

              <div className="md:w-3/5 w-full lg:w-fit mt-4 flex flex-row md:gap-4 gap-[5%] ">
                <Image src={google} className="  w-2/6  " alt="illustration" />

                <Image src={appStore} className=" w-2/6 " alt="appstore" />
              </div>
            </div>

            <Image src={preview} className=" lg:absolute lg:-right-8 lg:top-0 lg:h-[140%] w-4/5  -top-10 h-96 md:relative lg:flex  lg:w-1/2  " alt="phone showcase" />


          </div>

        </div>





      </div>

    </div>
  );
}
