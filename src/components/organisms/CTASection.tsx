import { useEffect, useRef } from 'react'
import { PhoneForm } from '../molecules/PhoneForm'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('cta-visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref}
      className="cta-section relative z-10 flex flex-col items-center text-center border-t border-accent/10 mx-3 sm:mx-5 px-2 sm:px-4 md:px-6 lg:px-8 py-20 md:py-28 mt-16 md:mt-24">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,82,26,0.07) 0%, transparent 70%)' }} />
      <p className="cta-item font-body text-[0.6rem] tracking-[0.4em] uppercase text-accent mb-6">
        · Be the first to know ·
      </p>
      <h2 className="cta-item font-display font-black leading-none tracking-tight text-fg mb-6 uppercase"
        style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
        Be first.
      </h2>
      <p className="cta-item font-body font-light text-muted leading-relaxed mb-10 max-w-md text-caption">
        Something is about to change in Kozhikode.
        <br />
        Leave your number — we'll find you when it's time.
      </p>
      <div className="cta-item w-full max-w-md">
        <PhoneForm
          buttonText="I'm In →"
          successMessage="Perfect. You will hear from us before anyone else does."
          note="Kozhikode only · Launching Soon 2026"
        />
      </div>
    </section>
  )
}
