import { useCallback, useEffect } from 'react'
import { useLineScramble } from '../../hooks/useLineScramble'
import { AnimatedItem } from '../atoms/AnimatedItem'
import { PhoneForm } from '../molecules/PhoneForm'

export function HeroSection() {
  const line1 = useLineScramble('calibre', 0)
  const line2 = useLineScramble('south', 100)

  useEffect(() => {
    const t = window.setTimeout(() => { line1.trigger(); line2.trigger() }, 1500)
    return () => clearTimeout(t)
  }, [line1, line2])

  const handleMouseEnter = useCallback(() => {
    line1.trigger(); line2.trigger()
  }, [line1, line2])

  return (
    <section
      className="flex-1 flex flex-col justify-center"
      style={{ paddingTop: 'clamp(0.25rem, 1.5vh, 1.25rem)', paddingBottom: 'clamp(1rem, 2vh, 2rem)' }}
    >
      <AnimatedItem delay={350}>
        <h1
          className="font-display font-black leading-[0.88] tracking-tight cursor-default select-none text-fg text-hero"
          onMouseEnter={handleMouseEnter}
        >
          <span ref={line1.elRef} className="block uppercase">calibre</span>
          <span ref={line2.elRef} className="block uppercase text-accent">south</span>
        </h1>
      </AnimatedItem>

      <AnimatedItem delay={600}>
        <p className="font-body font-light tracking-[0.25em] uppercase text-muted text-caption"
          style={{ marginTop: 'clamp(0.5rem, 1vh, 0.875rem)' }}>
          Every way to move.
        </p>
      </AnimatedItem>

      <AnimatedItem delay={850} className="h-px overflow-hidden"
        style={{ width: '4rem', marginTop: 'clamp(1rem, 2vh, 1.75rem)', marginBottom: 'clamp(1rem, 2vh, 1.75rem)' }}>
        <div className="animate-divider h-full bg-accent" style={{ animationDelay: '850ms' }} />
      </AnimatedItem>

      <AnimatedItem delay={1000}>
        <div className="flex flex-wrap items-start gap-[clamp(2rem,5vw,5rem)]">
          <div className="shrink-0">
            <div className="font-display font-black leading-[0.88] tracking-tight uppercase text-section"
              style={{ marginBottom: 'clamp(0.5rem, 1vh, 0.875rem)' }}>
              <span className="block text-fg">Every</span>
              <span className="block text-accent">gym.</span>
            </div>
            <p className="font-body font-light leading-relaxed text-muted text-caption" style={{ maxWidth: '320px' }}>
              One membership. Every gym, studio,
              <br />
              and court in Kozhikode.{' '}
              <span className="text-fg font-normal">Be the first to move.</span>
            </p>
          </div>
          <div className="flex-1 pt-1" style={{ minWidth: '260px', maxWidth: '440px' }}>
            <PhoneForm />
          </div>
        </div>
      </AnimatedItem>
    </section>
  )
}
