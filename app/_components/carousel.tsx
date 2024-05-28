"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

type Props = {
    autoSlide: boolean;
    slides: string[];
    autoSlideInterval: number;
}


const Carousel = ({autoSlide = false, slides, autoSlideInterval}: Props) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
  
    return () => {
      clearInterval(slideInterval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="overflow-hidden relative rounded-lg">
        <div className='flex transition-transform ease-out duration-500 ' style={{ transform: `translateX(-${curr * 100}%)` }}>{[
          ...slides.map((s, i) => (
            <Image key={i} src={s} alt="slide" width={3456} height={2160}/>
          )),
          // <video src={demoVideo} autoPlay muted loop />
        ]}</div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronLeft size={40} />
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronRight size={40} />
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}></div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Carousel