const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative hover:-translate-y-10 transition-all duration-500">
      {/* Added relative positioning */}
      <div className="flex flex-col items-center gap-2 relative z-10">
        {" "}
        {/* Added z-10 */}
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      {/* Orange background box, positioned behind the icon/text */}
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] left-1/2 -translate-x-1/2 z-0"></div>{" "}
      {/* Changed -z-10 to z-0 and centered it */}
    </div>
  );
};

export default SingleSkill;
