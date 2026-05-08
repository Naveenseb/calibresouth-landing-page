function LogoMark() {
  return (
    <img
      src="/img/logo.PNG"
      alt="CalibreSouth Logo"
      className="w-8 h-8 object-contain"
    />
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
