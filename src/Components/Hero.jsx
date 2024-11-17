import React from 'react'

const Hero = () => {
  return (
    <div className="w-full relative h-screen flex items-center justify-center pt-20 px-10 py-10 overflow-hidden">
      <div className="w-full flex items-start justify-center gap-6">
        <div className="w-[45%] flex flex-col items-center justify-center pl-20 gap-4">
          <div className="flex items-center justify-center">
            <img className="w-48" src="/assets/images/hero.png" alt="" />
            <h1 className="text-5xl font-[gilroy-bold] text-primary">
              Training and Placement Cell
            </h1>
          </div>
          <h1 className="text-primary text-2xl">Jalpaiguri Government Engineering College</h1>
          <div className="w-full flex items-center justify-center gap-4">
            <h1 className="bg-primary text-xl text-center text-white px-4 py-4 flex-1">tnpmail@jgec.an.in</h1>
            <h1 className="bg-primary text-xl text-center text-white px-4 py-4 flex-1">9876543210</h1>
          </div>
        </div>
        <div className="w-[55%] flex items-center justify-start">
            <img className="w-full h-full object-cover" src="/assets/images/herobg.png" alt="" />
        </div>
      </div>
      <div className="absolute w-[800px] h-[900px] rounded-full bg-[#fffff0] -top-[50%] -right-10 -z-10"></div>
    </div>
  )
}

export default Hero