'use client'

import ParticleBackground from '@/components/interface/Particles'
import { Icon, Icons } from '@/components/Icon'

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-start px-4">
      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-16 mt-16">
        <h1 className="text-4xl font-bold text-white">
          What would you like to
          <span className="block">watch tonight?</span>
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
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#1a1240] to-[#1e1e42]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #1e1e42 0%, transparent 50%)'
        }}
      />

      {/* Particles */}
      {/* <ParticleBackground /> */}
    </div>
  )
}