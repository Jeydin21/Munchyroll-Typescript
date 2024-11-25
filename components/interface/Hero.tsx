'use client'

import { useEffect, useState } from 'react'
import ParticleBackground from '@/components/interface/Particles'
import { Icon, Icons } from '@/components/Icon'

export default function Hero() {
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    const time = new Date();
    setHour(time.getHours());
  });

  var timeMessage;

  const dawn = 6; // 6 AM
  const noon = 12; // 12 PM
  const dusk = 16; // 4 PM
  const night = 20; // 8 PM

  if (hour !== null) {
    if (hour >= dawn && hour < noon) {
      timeMessage = "this morning?";
    } else if (hour >= noon && hour < dusk) {
      timeMessage = "this afternoon?";
    } else if (hour >= dusk && hour < night) {
      timeMessage = "this evening?";
    } else {
      timeMessage = "tonight?";
    }
  }



  return (
    <div className="relative flex flex-col items-center justify-start px-4">
      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-16 mt-16">
        <h1 className="text-4xl font-bold text-white">
          What would you like to watch
          <span className="block">{timeMessage}</span>
        </h1>

        <div className="flex flex-row items-center w-full mt-4 bg-slate-800 rounded-full">
          <Icon icon={Icons.SEARCH} className="text-xl text-[#60527A] ml-4" />
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full px-4 py-4 placeholder-[#60527A] rounded-full focus:outline-none bg-slate-800"
          />
        </div>

        <button className="px-14 py-3 bg-[#2d263a] transition-all rounded-lg text-[#756790] font-bold scale-90 hover:scale-95 duration-200">
          Browse
        </button>
      </div>

      {/* Gradient background */}

      {/* Particles */}
      {/* <ParticleBackground /> */}
    </div>
  )
}