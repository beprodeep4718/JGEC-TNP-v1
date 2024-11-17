const Navbar = () => {
  return (
    <div className="fixed bg-white/75 backdrop-blur-sm z-10 w-full flex border-b-4 border-primary items-center justify-between px-10 py-2 font-[gilroy-bold]">
      <div className="logo flex items-center justify-center gap-2">
        <img src="/assets/images/logo.png" alt="logo" />
        <h1 className="font-[gilroy-bold] text-3xl text-primary ">TNP</h1>
      </div>
      <div className="flex items-center justify-between gap-4 text-primary">
        <h1>
          For Recruiters <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>
          For Students <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>
          Team <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>Downloads</h1>
      </div>
    </div>
  );
};

export default Navbar;
