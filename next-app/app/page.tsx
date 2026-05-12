"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { StarAward01Icon } from "@hugeicons/core-free-icons"
import { Award01Icon } from "@hugeicons/core-free-icons"
import { MdMarkEmailUnread } from "react-icons/md"
import { FaBroadcastTower } from "react-icons/fa"

import { useEffect, useRef } from "react"
import gsap from "gsap"

import Image from "next/image"

export default function Page() {
  const awardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!awardsRef.current) return

    gsap.fromTo(
      awardsRef.current.children,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      }
    )
  }, [])
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="text-md absolute top-4 left-8 text-sky-300">
          ENES100 - Introduction to Engineering Design
        </div>

        <div className="absolute top-2 right-8 hidden md:block">
          <Image src="/img/umd.png" alt="UMD" width={70} height={70} />
        </div>

        <div className="mt-15 h-px w-full bg-white opacity-20" />

        <main className="mt-10 flex flex-col items-center justify-center gap-2 px-4 pb-20">
          <div className="text-md rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 font-semibold text-sky-200 backdrop-blur-md">
            Data Extraction: Quack Force
          </div>
          <Image
            src="/img/quack.png"
            alt="Quack Force"
            width={150}
            height={150}
            className="rounded-xl border border-white/10 bg-white/5 p-2 shadow-lg"
          />
          <div className="mt-5 flex flex-row gap-20 opacity-0 fade-in">
            <div className="flex flex-col items-center gap-2">
              <HugeiconsIcon
                icon={Award01Icon}
                size={40}
                className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)] transition-all"
              />
              <p className="text-center text-xs">
                Best Mission Award:
                <br />
                Data Extraction
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <HugeiconsIcon
                icon={StarAward01Icon}
                size={40}
                className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)] transition-all"
              />
              <p className="text-center text-xs">
                Most Innovative Design Award:
                <br />
                Honorable Mention
              </p>
            </div>
          </div>
          {/*<div className="text-md mt-5 flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 font-semibold text-sky-200 backdrop-blur-md">
            <FaBroadcastTower /> Live Demonstration
          </div> */}
          <video
            className="mt-5 w-1/4 max-w-2xl rounded-xl border border-white/10 px-2 py-2 shadow-sm"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
          </video>

          <div className="text-sm text-white/20 italic">
            The video above depicts the Quack Force OTV navigating the arena
            successfully
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-md mt-5 flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 font-semibold text-sky-200 backdrop-blur-md">
              <MdMarkEmailUnread className="text-sky-300" />
              Contact the Team!
            </div>

            <div className="flex w-full justify-center">
              <div className="grid w-full max-w-3xl grid-cols-1 gap-x-10 gap-y-6 rounded-xl p-5 text-sm md:grid-cols-2">
                <p>• Alex Mahn (amahn@terpmail.umd.edu)</p>
                <p>• Armand-Nicolas Tica (armnico@terpmail.umd.edu)</p>
                <p>• Beck Djumanov (bdjuman1@terpmail.umd.edu)</p>
                <p>• Lucinda Slagle (lslagle5@terpmail.umd.edu)</p>
                <p>• Emilio Guardado (milo2006@terpmail.umd.edu)</p>
                <p>• Chanakya Ayinala (cayinala@terpmail.umd.edu)</p>
                <p>• Defne Sarac (dfnsarac@terpmail.umd.edu)</p>
                <p>• Christian Salamanca (csalama2@terpmail.umd.edu)</p>
              </div>
            </div>
          </div>
        </main>

        <div className="pb-5 text-center text-xs text-white/50">
          Crafted with the power of Next.js, Tailwind CSS, React, GSAP, & Framer
          Motion
        </div>
      </div>
    </>
  )
}
