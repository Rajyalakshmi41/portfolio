import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  // pt-[10px] pl-[10px] pr-[10px] pb-[50px]
  return (
    // <button
    //   className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg  p-[1px] focus:outline-none "
    //   onClick={handleClick}
    // >
      <button className="relative inline-flex w-full overflow-hidden rounded-lg focus:outline-none md:w-60 md:mt-10 p-2 h-fit group">
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
      {/* remove px-3 py-1, add px-5 gap-2 */}
      {/* <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      > */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1x text-sm font-medium text-white backdrop-blur-3xl gap-2 py-4 bg-[linear-gradient(120deg,#79096d,45%,#00d4ff,55%,#79096d)] bg-[length:200%_100%] shadow-sm shadow-purple animate-shimmer">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
