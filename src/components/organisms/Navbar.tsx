function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="nav-l"><rect x="0" y="0" width="50" height="100" /></clipPath>
        <clipPath id="nav-r"><rect x="50" y="0" width="50" height="100" /></clipPath>
      </defs>
      <ellipse cx="37" cy="50" rx="23" ry="28" transform="rotate(-10 37 50)"
        stroke="#E8521A" strokeWidth="11" fill="none" opacity="0.28" clipPath="url(#nav-l)" />
      <ellipse cx="63" cy="50" rx="23" ry="28" transform="rotate(10 63 50)"
        stroke="#E8521A" strokeWidth="11" fill="none" opacity="0.28" clipPath="url(#nav-r)" />
      <ellipse cx="37" cy="50" rx="23" ry="28" transform="rotate(-10 37 50)"
        stroke="#E8521A" strokeWidth="11" fill="none" clipPath="url(#nav-r)" />
      <ellipse cx="63" cy="50" rx="23" ry="28" transform="rotate(10 63 50)"
        stroke="#E8521A" strokeWidth="11" fill="none" clipPath="url(#nav-l)" />
    </svg>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 animate-fade-up" style={{ animationDelay: '100ms' }}>
      <div className="mx-3 sm:mx-5 px-2 sm:px-4 md:px-6 lg:px-8 py-5 flex items-center justify-between border-b border-accent/10">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display font-black tracking-[0.2em] uppercase text-fg text-brand">
            CALIBRESOUTH
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="animate-pulse-dot rounded-full w-[5px] h-[5px] bg-accent"
            style={{ boxShadow: '0 0 6px var(--color-accent)' }} />
          <p className="font-body text-[0.65rem] font-medium tracking-[0.4em] uppercase text-muted">
            Launching 2026
          </p>
        </div>
      </div>
    </header>
  )
}
