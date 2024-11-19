

const Hero = () => {
  return (
    <div className="w-full relative h-screen flex flex-col lg:flex-row items-center justify-center pt-20 px-4 lg:px-20 py-10 overflow-hidden">
      <div className="flex items-end justify-center gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] flex flex-col items-center justify-center lg:items-start lg:pl-20 gap-4">
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center text-center lg:text-left gap-4 lg:gap-6">
            <img
              className="w-32 lg:w-48"
              src="/assets/images/hero.png"
              alt="Hero"
            />
            <h1 className="text-2xl lg:text-5xl font-[gilroy-bold] text-primary">
              Training and Placement Cell
            </h1>
          </div>
          <h1 className="text-primary text-center text-lg lg:text-2xl">
            Jalpaiguri Government Engineering College
          </h1>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
            <h1 className="bg-primary text-center text-white px-4 py-2 lg:py-4 text-sm lg:text-xl flex-1">
              placement@jgec.an.in
            </h1>
            <h1 className="bg-primary text-center text-white px-4 py-2 lg:py-4 text-sm lg:text-xl flex-1">
            +91 94347 01724
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-start mt-8 lg:mt-0">
          <img
            className="w-full h-auto object-cover"
            src="/assets/images/herobg.png"
            alt="Hero Background"
          />
        </div>
      </div>
      <div className="absolute w-[400px] lg:w-[800px] h-[450px] lg:h-[900px] rounded-full bg-[#fffff0] -top-[10%] lg:-top-[50%] -right-10 -z-10"></div>
    </div>
  );
};

export default Hero;
