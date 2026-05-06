import { useEffect, useRef } from 'react'

export function ManifestoSection() {
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('manifesto-visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-10 bg-accent overflow-hidden mt-16 md:mt-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="font-display font-black uppercase whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', color: 'rgba(0,0,0,0.1)', letterSpacing: '0.06em' }}>
          CALIBRESOUTH
        </span>
      </div>
      <div className="relative mx-3 sm:mx-5 px-2 sm:px-4 md:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <div ref={quoteRef} className="manifesto-item font-display font-black leading-[0.92] tracking-tight uppercase"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 6rem)', color: '#111111' }}>
          One city.<br />Every way to move.
        </div>
      </div>
    </section>
  )
}
