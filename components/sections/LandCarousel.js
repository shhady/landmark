'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef } from 'react'

const IMAGE_COUNT = 7

export default function LandCarousel() {
  const images = useMemo(
    () =>
      Array.from({ length: IMAGE_COUNT }, (_, i) => ({
        id: `land-${i + 1}`,
        src: `/carousel-images/land${i + 1}.jpeg`,
        alt: `Land ${i + 1}`,
      })),
    []
  )

  const containerRef = useRef(null)
  const pausedRef = useRef(false)

  // Two copies → seamless loop with scrollLeft wrap.
  const slides = useMemo(() => [...images, ...images], [images])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = 0
    let last = performance.now()
    const speedPxPerSec = 45

    const tick = (now) => {
      const dt = (now - last) / 1000
      last = now

      if (!pausedRef.current) {
        el.scrollLeft += speedPxPerSec * dt

        const half = el.scrollWidth / 2
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="py-14 md:py-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-right max-w-3xl ms-auto">
          {/* <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">תמונות מהשטח</h2> */}
        
        </div>

        {/* Force LTR inside the carousel so the scrolling direction feels natural */}
        <div dir="ltr" className="mt-7">
          <div
            ref={containerRef}
            className="no-scrollbar overflow-x-auto overflow-y-hidden"
            onMouseEnter={() => {
              pausedRef.current = true
            }}
            onMouseLeave={() => {
              pausedRef.current = false
            }}
            onTouchStart={() => {
              pausedRef.current = true
            }}
            onTouchEnd={() => {
              pausedRef.current = false
            }}
          >
            <div className="flex w-max gap-4 md:gap-5 py-2">
            {slides.map((img, idx) => (
              <div
                key={`${img.id}-${idx}`}
                className="shrink-0 w-[78vw] sm:w-[60vw] md:w-[clamp(220px,22vw,300px)]"
              >
                <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 aspect-[9/16] shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, 25vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

