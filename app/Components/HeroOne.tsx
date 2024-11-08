"use client";
import React, { useState,useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Hero1Props {
  para1: string;
  btn1text: string;
  btn2text: string;
}

const HeroOne: React.FC<Hero1Props> = ({ para1, btn1text, btn2text }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  const commonButtonStyles = "sm:text-xl px-10 py-5 sm:px-14 sm:p-8 rounded-full transition-transform duration-300";

  const [hoverHeading, setHoverHeading] = useState(false);
  

  const handleMouseEnterHeading = () => setHoverHeading(true);
  const handleMouseLeaveHeading = () => setHoverHeading(false);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const imageElement = document.querySelector("#fadeInImage");
    if (imageElement) observer.observe(imageElement);

    return () => {
      if (imageElement) observer.unobserve(imageElement);
    };
  }, []);

  

  
  return  (
    <div className="h-[140vh] sm:h-[240vh] flex flex-col justify-center overflow-hidden items-center bg-gradient-to-t from-blue-500 via-blue-500 rounded-s-3xl rounded-r-3xl via-10% to-white">
      <div className="w-[80vw] sm:w-[58vw] md:w-[64vw]">
        {/* Heading with animation */}
        <h1 className="text-center text-3xl text-[#1d1d1f] sm:text-6xl font-bold pt-[38vh] sm:pt-80 animate-fadeInSlideUp">
        Build and Customize Professional Resumes & Cover Letters.
        </h1>
        <p className="text-center text-[#52525b] text-sm sm:text-xl p-3 sm:px-16 pt-12 pb-8">
          {para1}
        </p>

        <div className="flex justify-center  items-center flex-col gap-4">
          {/* Button 1 */}
          <Button className={`${commonButtonStyles} hover:text-white hover:scale-105 md:px-20`}>
            <Link href="/" passHref>
              <span>{btn1text}</span>
            </Link>
          </Button>

          {/* Button 2 */}
          <Button
            variant="outline"
            className={`${commonButtonStyles} md:px-16 ${hover ? "scale-105" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/Resume" passHref className="flex justify-center items-center">
              <span>{btn2text}</span>
              <span className={`inline-block transition-transform pl-1 duration-300 ${hover ? "translate-x-1" : "translate-x-0"}`}>
                <FaArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
   {/* Dashboard Heading */}
   <div className="flex items-center">
  <Link href={'/'}> <h2
        onMouseEnter={handleMouseEnterHeading}
        onMouseLeave={handleMouseLeaveHeading}
        className={`text-center text-4xl sm:text-5xl font-bold text-black mt-20 py-2 md:py-9 itim-regular transition-transform duration-300  flex items-center cursor-pointer ${
          hoverHeading ? "scale-105 text-[#faf9f9]" : ""
        }`}

      >
        Templates
        <span
          className={`inline-block transition-transform pl-3 text-4xl pt-2 duration-300 ${
            hoverHeading ? "translate-x-1" : "translate-x-0"
          }`}
        >
          <FaArrowRight />
        </span>
      </h2> </Link>
   </div>

      {/* Image Below Buttons */}
      <div className=" flex justify-center mt-10 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[60vw]">
        {/* Placeholder for Image */}
        {/* <img src="/herosec1.png" alt="Dashboard Image" className="w-full h-auto" /> */}
          
        <div>
    <Link href={'/'}>   <Image
        id="fadeInImage"
        src="/herosec1-mb.png"
        alt="Dashboard Image"
        width={2048}
        height={1557}
        priority={true}
        quality={90}
        className={`transition-opacity duration-700  transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      /></Link>
    </div>

        {/* <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={2048} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} // Adjust quality for better optimization
          className="hidden"
        />
        </div>
        <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={20} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} 
          className="hidden  relative right-64  "// Adjust quality for better optimization
        />
        </div>
        <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={8} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} 
          className="hidden  relative right-full "// Adjust quality for better optimization
        />
        </div> */}
      </div>
    </div>
  );
};

export default HeroOne;
