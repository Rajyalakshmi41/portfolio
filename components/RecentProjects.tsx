"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 w-full">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center lg:w-[570px] w-[80vw] lg:mb-20"
            key={item.id}
          >
            <PinContainer
              title={`${item.link}`}
              href={`${item.link}`}
            >
              <div className="relative flex items-center justify-center  overflow-hidden h-full lg:w-[540px] w-[80vw] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <Image
                 width={570}
                 height={320}
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute w-[95%] h-[95%] rounded-3xl "
                  style={{color:"transparent"}}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    href={`${item.link}`}
                    target="_blank"
                  >
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
