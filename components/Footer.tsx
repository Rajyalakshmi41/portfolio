import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* <a href="mailto:ak6550352@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
        <form
          className="max-w-xl w-full mx-auto rounded-2xl p-8 shadow-purple shadow-sm mt-10 z-10"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEBFORM}
          ></input>
          <div className="flex flex-col space-y-2 w-full mb-6">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name
            </label>
            <div
              className="p-[3px] rounded-lg transition duration-300 group/input  "
              style={{
                background:
                  "radial-gradient(0px circle at 466px 41.9375px, var(--blue-500), transparent 80%)",
              }}
            >
              <input
                type="text"
                className="flex h-10 w-full border-none bg-gray-50 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 dark:bg-black-100 dark:ring-purple dark:focus-visible:ring-purple-500 ring-[.5px]"
                id="name"
                placeholder="Your name..."
                name="name"
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full mb-6">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email Address
            </label>
            <div
              className="p-[3px] rounded-lg transition duration-300 group/input"
              style={{
                background:
                  "radial-gradient(0px circle at 312px 35.9375px, var(--blue-500), transparent 80%)",
              }}
            >
              <input
                type="email"
                className="flex h-10 w-full border-none bg-gray-50 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 dark:bg-black-100 dark:ring-purple dark:focus-visible:ring-purple-500 ring-[.5px]"
                id="email"
                placeholder="jondoe@gmail.com"
                name="email"
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full mb-6">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="subject"
            >
              Subject
            </label>
            <div
              className="p-[3px] rounded-lg transition duration-300 group/input"
              style={{
                background:
                  "radial-gradient(0px circle at 134px 21.9375px, var(--blue-500), transparent 80%)",
              }}
            >
              <input
                type="text"
                className="flex h-10 w-full border-none bg-gray-50 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 dark:bg-black-100 dark:ring-purple dark:focus-visible:ring-purple-500 ring-[.5px]"
                id="subject"
                placeholder="Your subject matter..."
                name="subject"
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full mb-8">
            <label
              className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              Message
            </label>
            <div
              className="p-[3px] rounded-lg transition duration-300 group/input"
              style={{
                background:
                  "radial-gradient(0px circle at 510px 67.9375px, var(--blue-500), transparent 80%)",
              }}
            >
              <textarea
                rows={3}
                className="flex w-full border-none bg-gray-50 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 dark:bg-black-100 dark:ring-purple dark:focus-visible:ring-purple-500 ring-[.5px]"
                id="message"
                name="message"
                placeholder="Your message..."
                required={true}
                style={{ height: "83px" }}
              ></textarea>
            </div>
          </div>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>
          <button
            type="submit"
            className="bg-[linear-gradient(120deg,#79096d,45%,#00d4ff,55%,#79096d)] bg-[length:200%_100%] shadow-lg shadow-black-100  animate-shimmer w-full h-14 rounded-lg flex items-center justify-center group cursor-pointer"
          >
            <span>Send Feedback</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="group-hover:translate-x-2 transition duration-500 ml-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 mb-4 h-[1px] w-full"></div>
        </form>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-lg mx-auto">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rajya Lakshmi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={`${info.link}`} target="_blank" key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
