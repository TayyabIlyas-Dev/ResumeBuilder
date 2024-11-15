import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HeroThree = () => {
  return (
    <div className="bg-[#fafafa] rounded-lg mx-6 text-black">
      <div className="flex flex-col md:flex-row">
        <div className="text-start md:text-left md:w-1/2 md:pt-20 pl-4">
          <h4 className="text-2xl font-bold p-4 py-8">
            <span className="font-black text-3xl">|</span>Tools
          </h4>
          <h4 className="text-3xl font-bold p-4 py-4">
            The modern content engine for CV, docs, and product guides.
          </h4>
          <p className="mt-2 p-4 py-1 font-medium text-[#6262fdfd]">
            Create and scale dynamic Resume, docs, and Shareable links references. Built
            for teams needing full control and customization — no heavy lifting,
            no upkeep, no reinventing the wheel.
          </p>
          <div className="mt-4">
            <Button className="rounded-full transition-transform duration-300 transform hover:scale-105 group py-5 mx-5 mt-2 md:mt-5">
              <Link href="#" passHref className="flex justify-center items-center group">
                <span className="px-3">Explore Tools</span>
                <span className="inline-block transition-transform pl-1 duration-300 group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2">
          <Image
            src="/Hero3-pic.png"
            alt="Dashboard Image"
            width={500}
            height={500}
            className="w-full h-auto sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[700px] lg:h-full rounded-lg"
            priority={true}
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
