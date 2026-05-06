import { useEffect, useRef } from 'react'

interface StatItemProps {
  number: string
  accentPart?: string
  suffix: string
  label: string
  delay?: number
}

export function StatItem({ number, accentPart, suffix, label, delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('stat-visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="stat-item border-l-2 border-accent/30 pl-8 py-14 pr-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display font-extrabold leading-none text-stat mb-3">
        <span className="text-fg">{number}</span>
        {accentPart && <span className="text-accent">{accentPart}</span>}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-muted">{label}</div>
    </div>
  )
}
